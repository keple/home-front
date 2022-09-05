import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {ApiConfig} from '../configuration/api.config';
import {RxstompService} from "../intro/services/rxstomp.service";
import {AxiosInstance} from "axios";
import {GuardValidationService} from "../intro/services/guard.validation.service";


@Injectable()
export class IntroGuard implements CanActivate {
  constructor(private apiConfig: ApiConfig,
              private router: Router,
              private rxStompService: RxstompService,
              private validationService: GuardValidationService) {
  }
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // token 검증 후 access 가능하도록 변경
    return this.validationService.validationToken(route.params.token).then((auth) => {
      return true;
    }).catch((error) => {
      this.router.navigate(['']);
      return false;
    });
  }
}
