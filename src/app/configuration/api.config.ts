import {Injectable} from '@angular/core';
import axios, {AxiosInstance} from 'axios';
import {ErrorResponseContentComponent} from '../error-response-content/error-response-content.component';
import {MatDialog} from '@angular/material/dialog';
import { environment } from '../../environments/environment';
// global
axios.defaults.baseURL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiConfig {
  constructor( private dialog: MatDialog) {
  }
  private requestRejectedInterceptor = (error) => {
    console.error(error);
    const dialogRef = this.dialog.open(ErrorResponseContentComponent , {
      width: '400px',
      height: '470px',
      data : {statusCode: error.response.status, message: error.response.data.message }
    });
    return Promise.reject(error);
  }
  public getSecureAxiosFactory(): any {
    return (baseurl, apiVersion) => {
      const secureAxios = axios.create({
        baseURL: `${environment.apiUrl}/${baseurl}`
      });
      secureAxios.interceptors.request.use(
        (config) => {
          // authentication header check
          if (localStorage.getItem('token') === null){
            const dialogRef = this.dialog.open(ErrorResponseContentComponent , {
              width: '400px',
              height: '500px',
              data : {statusCode: -401}
            });
            throw new axios.Cancel('client 가 토큰을 가지고있지 않습니다.');
          }
          // set authorization header
          config.headers.Authorization = localStorage.getItem('token');
          config.headers['X-API-VERSION'] = apiVersion || 1;
          return config;
        },
        (error) => {
          console.log('axios interceptor error' , error);
          return Promise.reject(error);
        }
        // none strict axios setting
      );
      secureAxios.interceptors.response.use(
        (response) => {
          return response;
        },
        this.requestRejectedInterceptor
      );
      return secureAxios;
    };
  }
  public getNonSecureAxiosFactory(): any {
    return (baseurl, apiVersion) => {
      const noneSecureAxios = axios.create({
        baseURL: `${environment.apiUrl}/${baseurl}`
      });
      noneSecureAxios.interceptors.request.use(
        config => {
          config.headers['X-API-VERSION'] = apiVersion || 1;
          return config;
        }
      );
      noneSecureAxios.interceptors.response.use(
        (response) => response,
        this.requestRejectedInterceptor
      );
      return noneSecureAxios;
    };
  }
  public getNonStrictSecureAxiosFactory(): any {
    return (baseurl, apiVersion) => {
      const nonStrictSecureAxios = axios.create({
        baseURL: `${environment.apiUrl}/${baseurl}`
      });
      nonStrictSecureAxios.interceptors.request.use(
        config => {
          config.headers.Authorization = localStorage.getItem('token');
          config.headers['X-API-VERSION'] = apiVersion || 1;
          return config;
        }
      );
      nonStrictSecureAxios.interceptors.response.use(
        (response) => {
          return response;
        },
        this.requestRejectedInterceptor
      );
      return nonStrictSecureAxios;
    };
  }
}
