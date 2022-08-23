import {Injectable} from '@angular/core';
import axios, {AxiosInstance} from 'axios';
import {ErrorResponseContentComponent} from '../error-response-content/error-response-content.component';
import {MatDialog} from '@angular/material/dialog';
import { environment } from '../../environments/environment';
// global
axios.defaults.baseURL = environment.apiUrl;

@Injectable()
export class ApiConfig {
  private secureAxios;
  private nonSecureAxios;
  private nonStrictSecureAxios;
  constructor( private dialog: MatDialog) {
    this.nonSecureAxios = axios.create();
    this.nonSecureAxios.interceptors.response.use(
      (response) => response,
      this.requestRejectedInterceptor
    );
    // secure axios setting
    this.secureAxios = axios.create();
    this.secureAxios.defaults.headers.common.Authorization = localStorage.getItem('token');
    this.secureAxios.interceptors.request.use(
      (config) => {
        // authentication header check
        console.log('Authentication token : ', this.secureAxios.defaults.headers.common.Authorization);
        if (localStorage.getItem('token') === null){
          const dialogRef = this.dialog.open(ErrorResponseContentComponent , {
            width: '400px',
            height: '500px',
            data : {statusCode: -401}
          });
          throw new axios.Cancel('client 가 토큰을 가지고있지 않습니다.');
        }
        return config;
      },
      (error) => {
        console.log('axios interceptor error' , error);
        return Promise.reject(error);
      }
      // none strict axios setting
    );
    this.secureAxios.interceptors.response.use(
      (response) => {
        return response;
      },
      this.requestRejectedInterceptor
    );
    // none strict secure axios setting
    this.nonStrictSecureAxios = axios.create();
    this.nonStrictSecureAxios.defaults.headers.common.Authorization = localStorage.getItem('token');
    this.nonStrictSecureAxios.interceptors.response.use(
      (response) => {
        return response;
      },
      this.requestRejectedInterceptor
    );
  }
  private requestRejectedInterceptor = (error) => {
    console.log(error);
    const dialogRef = this.dialog.open(ErrorResponseContentComponent , {
      width: '400px',
      height: '470px',
      data : {statusCode: error.response.status, message: error.response.data.message }
    });
    return Promise.reject(error);
  }
  public getSecureAxios(): AxiosInstance {
    return this.secureAxios;
  }
  public getNonSecureAxios(): AxiosInstance {
    return this.nonSecureAxios;
  }
  public getNonStrictSecureAxios(): AxiosInstance {
    return this.nonStrictSecureAxios;
  }
}
