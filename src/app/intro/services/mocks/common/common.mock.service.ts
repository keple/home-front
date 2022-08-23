import {CommonService} from '../../abstract/common.service';
import {Injectable} from '@angular/core';
import {MenuModel} from '../../../../../model/menu.model';
import {ServiceModel} from '../../../../../model/service.model';

@Injectable({
  providedIn : 'root'
})
export class CommonMockService implements CommonService {
  public getSubMenuList(): Promise<MenuModel[]> {
      throw new Error('Method not implemented.');
  }
  getMenuList(): Promise<Array<MenuModel>> {
    return new Promise((resolve , reject) => {
      resolve([
        new MenuModel('DashBoard' , '메인', '/'),
      ]);
    });
  }

  publishApiKey(key: string): Promise<any> {
    return Promise.resolve(undefined);
  }

  getProjects(): Promise<Array<ServiceModel>> {
    const services = [
      new ServiceModel('test', 'spring-boot'),
      new ServiceModel('test1', 'spring-boot'),
      new ServiceModel('test2', 'spring-boot')
    ];
    return Promise.resolve(services);
  }

  getSecureMenuList(): Promise<Array<MenuModel>> {
    return Promise.resolve(undefined);
  }

}
