import {ApiConfig} from '../../configuration/api.config';
import {Injectable} from '@angular/core';
import {AdminServicesModel} from '../model/admin.services.model';


@Injectable()
export class PortfolioService {
  private commonAdminApi;
  private commonApi;
  constructor(private apiConfig: ApiConfig) {
    this.commonAdminApi = apiConfig.getSecureAxiosFactory()('admin/common');
    this.commonApi = apiConfig.getNonSecureAxiosFactory()('common');
  }
  getPortfolioList(): Promise<Array<AdminServicesModel>>{
    return this.commonAdminApi.get('/services').then(({data}) => {
      return data.map(x => new AdminServicesModel(x));
    });
  }
}
