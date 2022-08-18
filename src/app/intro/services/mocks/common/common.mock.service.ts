import {CommonService} from '../../abstract/common.service';
import {Injectable} from '@angular/core';
import {MenuDto} from '../../../../../model/MenuDto';
import {ServiceDto} from '../../../../../model/ServiceDto';

@Injectable({
  providedIn : 'root'
})
export class CommonMockService implements CommonService {
  public getSubMenuList(): Promise<MenuDto[]> {
      throw new Error('Method not implemented.');
  }
  getMenuList(): Promise<Array<MenuDto>> {
    return new Promise((resolve , reject) => {
      resolve([
        new MenuDto('DashBoard' , '메인', '/'),
      ]);
    });
  }

  publishApiKey(key: string): Promise<any> {
    return Promise.resolve(undefined);
  }

  getProjects(): Promise<Array<ServiceDto>> {
    const services = [
      new ServiceDto('test', 'spring-boot'),
      new ServiceDto('test1', 'spring-boot'),
      new ServiceDto('test2', 'spring-boot')
    ];
    return Promise.resolve(services);
  }

  getSecureMenuList(): Promise<Array<MenuDto>> {
    return Promise.resolve(undefined);
  }

}