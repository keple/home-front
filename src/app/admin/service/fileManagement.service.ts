import {Injectable} from '@angular/core';
import {ApiConfig} from '../../configuration/api.config';
import {MenuModel} from '../../../model/menu.model';
import {AdminFileDto} from '../model/AdminFileDto';

@Injectable()
export class FileManagementService {
  constructor(private apiConfig: ApiConfig) {}

  public uploadFile(fileType , formData): void {
    this.apiConfig.getSecureAxios().post(`common/upload/${fileType}`, formData, {
      headers : {'Contents-type': 'multipart/form-data' }
    }).then((data) => {

    });
  }
  public async getManagedFileList(): Promise<Array<AdminFileDto>> {
    return await this.apiConfig.getSecureAxios().get(`admin/resource/files` ,
    {}
    ).then(({data}) => {
        console.log('adminResource' , data);
        return data.map(file => new AdminFileDto(file));
    });
  }
}
