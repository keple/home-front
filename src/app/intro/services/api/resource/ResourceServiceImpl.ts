import {ResourceService} from '../../abstract/resource.service';
import {ApiConfig} from '../../../../configuration/api.config';
import {Injectable} from '@angular/core';
import {FileModel} from '../../../../../model/file.model';
import {AxiosError} from '../../../../../model/response/AxiosError';
import {ErrorResponseContentComponent} from '../../../../error-response-content/error-response-content.component';
import {MatDialog} from '@angular/material/dialog';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {AxiosInstance} from "axios";
@Injectable()
export class ResourceServiceImpl implements ResourceService {
  private noneSecureAxiosForResource: AxiosInstance;
  private secureAxiosForResource: AxiosInstance;
  constructor(private apiConfig: ApiConfig, private sanitizer: DomSanitizer){
    this.apiConfig = apiConfig;
    this.noneSecureAxiosForResource = this.apiConfig.getNonSecureAxiosFactory()('document' , 1);
    this.secureAxiosForResource = this.apiConfig.getSecureAxiosFactory()('resource' , 1);
  }
  async getFileList(): Promise<Array<FileModel>> {
    return await this.noneSecureAxiosForResource({
      url: '/files',
      method: 'get',
    }).then(({data}) => {
      if (!data) { return; }
      return data.map((x) =>  new FileModel(x));
    });
  }
  async getFileForViewer(filename): Promise<ArrayBuffer> {
    return await this.noneSecureAxiosForResource({
      url: `/career/${filename}`,
      method: 'get',
      responseType: 'blob'
    }).then(({data}) => {
      if (!data) { return; }
      return data.arrayBuffer();
    });
  }
  async getFile(filename): Promise<ArrayBuffer> {
    return await this.secureAxiosForResource({
      url: `/${filename}`,
      method: 'get',
      responseType: 'blob',
    }).then(({data}) => {
      if (!data) { return; }
      return data.arrayBuffer();
    });
  }
}
