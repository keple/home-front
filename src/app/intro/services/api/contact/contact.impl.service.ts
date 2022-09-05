import {Injectable} from '@angular/core';
import {ApiConfig} from '../../../../configuration/api.config';
import {RxstompService} from '../../rxstomp.service';
import {ChatRoomModel} from '../../../../../model/chatRoom.model';
import {Observable} from 'rxjs';
import {IMessage} from '@stomp/stompjs';
import {ContactService} from '../../abstract/contact.service';
import {ChatService} from '../../chat.service';
import {ChatMessageModel} from '../../../../../model/chatMessage.model';
import {AxiosInstance} from "axios";

@Injectable()
export class ContactImplService implements ContactService{
  private noneSecureAxiosForNotificationApi: AxiosInstance;
  private secureAxiosForChatApi: AxiosInstance;
  constructor(private apiConfig: ApiConfig,
              private stompService: RxstompService,
              private chatService: ChatService) {
    this.noneSecureAxiosForNotificationApi = this.apiConfig.getNonSecureAxiosFactory()('notification', 1);
    this.secureAxiosForChatApi = this.apiConfig.getSecureAxiosFactory()('chat' , 1);
  }
  subscribeRoom(roomId: string): Observable<IMessage> {
    const observableMessage = this.stompService.watch(`/topic/room/${roomId}`, {Authorization: localStorage.getItem('token')});
    this.chatService.setCurrentRoom(roomId);
    return observableMessage;
  }
  getChatRooms(): Promise<Array<ChatRoomModel>> {
    return this.secureAxiosForChatApi({
      url: '/rooms',
      method: 'get',
    }).then<Array<ChatRoomModel>>(({data}) => {
      return data.map((dt) => {
        return new ChatRoomModel(dt);
      });
    }).catch(error => {
      console.log(error);
      return [];
    });
  }
  sendMail(mailDto) {
    this.noneSecureAxiosForNotificationApi({
      url: '/send',
      method: 'post',
      data : {
        ...mailDto
      }
    }).then((data) => {
      console.log(data);
    });
  }

  publishMessage(chatMessage: string ): void {
    const roomId = this.chatService.getCurrentRoom();
    return this.stompService.publish({
      destination : `/app/publish`,
      body : JSON.stringify(new ChatMessageModel({
        roomId : this.chatService.getCurrentRoom() ,
        message : chatMessage ,
        userName : '' ,
        messageType : 'simple'
      }))
    });
  }
}
