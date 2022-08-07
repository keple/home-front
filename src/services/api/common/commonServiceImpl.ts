import {Injectable} from '@angular/core';
import {CommonService} from '../../abstract/CommonService';
import {MenuDto} from '../../../model/MenuDto';
import {ApiConfig} from '../../../app/configuration/apiConfig';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ServiceDto} from '../../../model/ServiceDto';
@Injectable({
  providedIn : 'root'
})
export class CommonServiceImpl implements CommonService{
  constructor(private apiConfig: ApiConfig, private snackBar: MatSnackBar) {
    this.apiConfig = apiConfig;
  }

  async getMenuList(): Promise<Array<MenuDto>> {
    return await this.apiConfig.getNonSecureAxios()({
      url: 'common/menus',
      method: 'get',
    }).then<Array<MenuDto>>(({data}) => {
      return data.map((dt) => {
        return new MenuDto(dt.menuId, dt.path);
      });
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
      return data;
    }).catch((error) => {
      console.log(error);
      this.snackBar.open('인증 실패!' , 'close', {duration: 2500});
    });
  }
}
