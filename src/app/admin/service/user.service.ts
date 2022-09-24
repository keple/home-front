import {ApiConfig} from '../../configuration/api.config';
import {Injectable} from '@angular/core';
import {AdminUserModel} from "../model/admin.user.model";

@Injectable()
export class UserService {
   private userAdminApi;
   constructor(private apiConfig: ApiConfig){
     this.userAdminApi = apiConfig.getSecureAxiosFactory()('admin/user');
   }
   public async getUserList(): Promise<Array<AdminUserModel>> {
     return await this.userAdminApi.get('/users').then(data => data.data);
   }
   public async getUserDetail(userId: string): Promise<AdminUserModel> {
     return await this.userAdminApi.get(`/user/${userId}`).then(data => data.data);
   }
}
