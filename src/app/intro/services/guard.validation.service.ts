import { AxiosInstance} from "axios";
import {Injectable} from "@angular/core";
import {ApiConfig} from "../../configuration/api.config";
@Injectable({
  providedIn: 'root'
})
export class GuardValidationService {
  private validationApi: AxiosInstance;
  constructor(private apiConfig: ApiConfig){
    this.validationApi = apiConfig.getNonSecureAxiosFactory()('auth/validationToken' , 1);
  }
  public validationToken(token: string): Promise<any> {
    return this.validationApi({
      data : token,
      method: 'post'
    }).then(({data}) => {
      localStorage.setItem('token' , `Bearer ${token}`);
      return data;
    }).catch(error => {
      throw error;
    });
  }
}
