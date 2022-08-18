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
  sendMail(mailDto) {
    this.apiConfig.getNonSecureAxios()({
      url: 'notification/send',
      method: 'post',
      data : {
        ...mailDto
      }
    }).then((data) => {
      console.log(data);
    });
  }
}
