import {Injectable} from '@angular/core';
import {ApiConfig} from '../../configuration/api.config';
import {AdminFileDto, AdminFileInf} from '../model/AdminFileDto';

@Injectable()
export class FileManagementService {
  private instance;
  constructor(private apiConfig: ApiConfig) {
    // base url setting
    this.instance = apiConfig.getSecureAxiosFactory()(`admin/resource/`);
  }

  public uploadFile(fileType , formData): void {
    this.instance.post(`upload/${fileType}`, formData, {
      headers : {'Contents-type': 'multipart/form-data' }
    }).then((data) => {

    });
  }
  public async getManagedFileList(): Promise<Array<AdminFileDto>> {
    return await this.instance.get(`/files` ,
    {}
    ).then(({data}) => {
        console.log('adminResource' , data);
        return data.map(file => new AdminFileDto(file));
    });
  }
  public getDocumentInfo(docName: string): Promise<AdminFileDto> {
    return this.instance.getNonSecureAxios()({
      url : `docInfo/${docName}`,
      method: 'get'
    }).then(({data}) => {
      return new AdminFileDto(data);
    }).catch((error) => {
      console.error(error);
    });
  }
}
