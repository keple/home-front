import {Injectable} from '@angular/core';
import {ApiConfig} from '../../configuration/api.config';
import {AdminFileModel, AdminFileInf} from '../model/admin.file.model';

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
  public async getManagedFileList(): Promise<Array<AdminFileModel>> {
    return await this.instance.get(`/files` ,
    {}
    ).then(({data}) => {
        console.log('adminResource' , data);
        return data.map(file => new AdminFileModel(file));
    });
  }
  public getDocumentInfo(docName: string): Promise<AdminFileModel> {
    return this.instance({
      url : `docInfo/${docName}`,
      method: 'get'
    }).then(({data}) => {
      return new AdminFileModel(data);
    }).catch((error) => {
      console.error(error);
    });
  }
  public updateDocumentInfo(formData , docName): Promise<void> {
    return this.instance({
      url: `docInfo/${docName}`,
      method: 'put',
      data: formData
    }).then(({data}) => {
      console.log(data);
    }).catch(error => {
      console.error(error);
    });
  }
}
