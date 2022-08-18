import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {ApiConfig} from '../configuration/apiConfig';


@Injectable()
export class IntroGuard implements CanActivate {
  constructor(private apiConfig: ApiConfig, private router: Router) {
  }
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // token 검증 후 access 가능하도록 변경
    return this.apiConfig.getNonSecureAxios()({
      url : 'auth/guard/validationToken',
      data : route.params.token
    }).then((auth) => {
      localStorage.setItem('token' , route.params.token);
      return true;
    }).catch((error) => {
      this.router.navigate(['']);
      return false;
    });
  }
}
