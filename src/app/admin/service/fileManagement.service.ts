import {Injectable} from '@angular/core';
import {ApiConfig} from '../../configuration/apiConfig';

@Injectable()
export class FileManagementService {
  constructor(private apiConfig: ApiConfig) {}

  public uploadFile(fileType , formData): void {
    this.apiConfig.getSecureAxios().post(`common/upload/${fileType}`, formData, {
      headers : {'Contents-type': 'multipart/form-data' }
    }).then((data) => {

    });
  }
}
