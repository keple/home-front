import {Injectable} from '@angular/core';
import {CommonService} from '../../abstract/CommonService';
import {MenuDto} from '../../../model/MenuDto';
import {ApiConfig} from '../../../app/configuration/apiConfig';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ServiceDto} from '../../../model/ServiceDto';
import {Router} from '@angular/router';
import {AdminPanelComponent} from '../../../app/admin/admin-panel/admin-panel.component';
import {ComponentMap} from '../../../resources/component.map';
@Injectable({
  providedIn : 'root'
})
export class CommonServiceImpl implements CommonService{
  constructor(private apiConfig: ApiConfig, private snackBar: MatSnackBar, private router: Router, private componentMap: ComponentMap) {
    this.apiConfig = apiConfig;
  }

  async getMenuList(): Promise<Array<MenuDto>> {
    return await this.apiConfig.getNonStrictSecureAxios()({
      url: 'common/menus',
      method: 'get',
    }).then<Array<MenuDto>>(({data}) => {
      const introRoutesConfig = this.router.config.filter(route => route.path === 'intro');
      const menuList = data.map((dt) => {
        // path가 같은 Route object가 있는지 확인
        const previousMatches = introRoutesConfig[0].children.filter((r => {
          if (r.path === dt.path) {return r; }
        }));
        if (previousMatches.length === 0){
          introRoutesConfig[0].children.push({path: dt.path , component: this.componentMap.get(dt.menuId)});
        }
        return new MenuDto(dt.menuId, dt.menuName, dt.path);
      });
      this.router.resetConfig(
        [
          ...this.router.config,
        ]
      );
      console.log('change root router config' , this.router.config);
      return menuList;
    });
  }
  async getProjects(): Promise<Array<ServiceDto>> {
    return await this.apiConfig.getNonSecureAxios()({
      url: 'common/services',
      method: 'get',
      withCredentials: true
    }).then<Array<ServiceDto>>(({data}) => {
      return data.map((dt) => {
        return new ServiceDto(dt.serviceName, dt.tech);
      });
    });
  }

  async publishApiKey(username , password , authType): Promise<any> {
    return await this.apiConfig.getNonSecureAxios()({
      url: 'auth/publishToken',
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

  async getSubMenuList(viewCategory: string): Promise<Array<MenuDto>> {
    return await this.apiConfig.getNonSecureAxios()({
      url: `common/${viewCategory}/subMenus`,
      method: 'get'
    }).then<Array<MenuDto>>(({data}) => {
        return data.map((dt) => {
          return new MenuDto(dt.menuId , dt.menuName, dt.path);
        });
    });
  }
}
