import {ApiConfig} from '../../configuration/api.config';
import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
  private userAdminApi;
   constructor(private apiConfig: ApiConfig){
     this.userAdminApi = apiConfig.getSecureAxiosFactory()('admin/user');
   }
}
