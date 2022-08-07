import {ResourceService} from '../../abstract/ResourceService';
import {ApiConfig} from '../../../app/configuration/apiConfig';
import {Injectable} from '@angular/core';
import {FileDto} from '../../../model/FileDto';
import {AxiosError} from '../../../model/response/AxiosError';
import {ErrorResponseContentComponent} from '../../../app/error-response-content/error-response-content.component';
import {MatDialog} from '@angular/material/dialog';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
@Injectable()
export class ResourceServiceImpl implements ResourceService {
  constructor(private apiConfig: ApiConfig, private sanitizer: DomSanitizer){
    this.apiConfig = apiConfig;
  }
  async getFileList(): Promise<Array<FileDto>> {
    return await this.apiConfig.getNonSecureAxios()({
      url: 'document/files',
      method: 'get',
    }).then(({data}) => {
      if (!data) { return; }
      return data.map((x) =>  new FileDto(x.documentType, x.filename , null));
    });
  }
  async getFileForViewer(filename): Promise<ArrayBuffer> {
    return await this.apiConfig.getNonSecureAxios()({
      url: `document/career/${filename}`,
      method: 'get',
      responseType: 'blob'
    }).then(({data}) => {
      if (!data) { return; }
      return data.arrayBuffer();
    });
  }
  async getFile(filename): Promise<ArrayBuffer> {
    return await this.apiConfig.getSecureAxios()({
      url: `resource/${filename}`,
      method: 'get',
      responseType: 'blob',
    }).then(({data}) => {
      if (!data) { return; }
      return data.arrayBuffer();
    });
  }
}