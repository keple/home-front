import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {ApiConfig} from '../configuration/api.config';
import {UserModelInterface} from '../interface/model/user-model.interface';
import {Injectable} from '@angular/core';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private apiConfig: ApiConfig , private router: Router){
  }
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('token' , localStorage.getItem('token'));
    // Admin 권한을 가지고있는지 확인
    // secure axios는 header에 token을 추가하도록 동작
    return this.apiConfig.getSecureAxios()({
      url : 'auth/validationToken',
      method: 'get'
    }).then(({data}) => {
      console.log(data.role);
      if (data.role === 'ADMIN'){
        return true;
      }else{
        this.router.navigate(['']);
        return false;
      }
    }).catch(error => {
      this.router.navigate(['']);
      return false;
    });
  }
}
