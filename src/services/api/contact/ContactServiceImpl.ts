import {Injectable} from '@angular/core';
import {ApiConfig} from '../../../app/configuration/apiConfig';

@Injectable()
export class ContactServiceImpl {
  constructor(private apiConfig: ApiConfig) {

  }
  enterRoom(roomId): void {
    this.apiConfig.getNonSecureAxios()({
      url: 'chat/sub/${roomId}'
    });
  }
  sendMail(title: string , contents: string) {
    this.apiConfig.getNonSecureAxios()({
      url: 'notification/send',
      method: 'post',
      data : {
        title,
        contents
      }
    }).then((data) => {
      console.log(data);
    });
  }
}
