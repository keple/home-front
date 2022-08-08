import {CommonService} from '../../abstract/CommonService';
import {Injectable} from '@angular/core';
import {MenuDto} from '../../../model/MenuDto';
import {ServiceDto} from '../../../model/ServiceDto';

@Injectable({
  providedIn : 'root'
})
export class CommonServiceMock implements CommonService {
  public getSubMenuList(): Promise<MenuDto[]> {
      throw new Error('Method not implemented.');
  }
  getMenuList(): Promise<Array<MenuDto>> {
    return new Promise((resolve , reject) => {
      resolve([
        new MenuDto('DashBoard' , '/dashBoard'),
        new MenuDto('Search', '/search') ,
        new MenuDto('Files', '/files')
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
