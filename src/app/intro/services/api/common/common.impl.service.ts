import {Injectable} from '@angular/core';
import {CommonService} from '../../abstract/common.service';
import {MenuModel} from '../../../../../model/menu.model';
import {ApiConfig} from '../../../../configuration/api.config';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ServiceModel} from '../../../../../model/service.model';
import {Router} from '@angular/router';
import {AdminPanelComponent} from '../../../../admin/admin-panel/admin-panel.component';
import {ComponentMap} from '../../../../../resources/component.map';
import {AxiosInstance} from "axios";
@Injectable({
  providedIn : 'root'
})
export class CommonImplService implements CommonService{
  private noneSecureAxiosAuth: AxiosInstance;
  private noneSecureAxiosCommon: AxiosInstance;
  constructor(private apiConfig: ApiConfig, private snackBar: MatSnackBar, private router: Router, private componentMap: ComponentMap) {
    this.apiConfig = apiConfig;
    this.noneSecureAxiosAuth = apiConfig.getNonSecureAxiosFactory()('auth');
    this.noneSecureAxiosCommon = apiConfig.getNonSecureAxiosFactory()('common');
  }

  async getMenuList(): Promise<Array<MenuModel>> {
    return await this.noneSecureAxiosCommon({
      url: '/menus',
      method: 'get',
    }).then<Array<MenuModel>>(({data}) => {
      const menuList = data.map((dt) => {
        return new MenuModel(dt.menuId, dt.menuName, dt.path);
      });
      console.log('change root router config' , this.router.config);
      return menuList;
    });
  }
  async getProjects(): Promise<Array<ServiceModel>> {
    return await this.noneSecureAxiosCommon({
      url: '/services',
      method: 'get',
      withCredentials: true
    }).then<Array<ServiceModel>>(({data}) => {
      return data.map((dt) => {
        return new ServiceModel(dt.serviceName, dt.tech);
      });
    });
  }

  async publishApiKey(username , password , authType): Promise<any> {
    return await this.noneSecureAxiosAuth({
      url: 'publishToken',
      method: 'post',
      data: {
        username,
        password,
        authType
      }
    }).then<string>(({data}) => {
      console.log(data);
      // 인증성공 알림
      this.snackBar.open('인증에 성공했습니다' , 'close', {duration: 2500});
      localStorage.setItem('token' , data);
      return data;
    }).catch((error) => {
      console.log(error);
      this.snackBar.open('인증 실패!' , 'close', {duration: 2500});
    });
  }

  async getSubMenuList(viewCategory: string): Promise<Array<MenuModel>> {
    return await this.noneSecureAxiosCommon({
      url: `/${viewCategory}/subMenus`,
      method: 'get'
    }).then<Array<MenuModel>>(({data}) => {
        return data.map((dt) => {
          return new MenuModel(dt.menuId , dt.menuName, dt.path);
        });
    });
  }
}
