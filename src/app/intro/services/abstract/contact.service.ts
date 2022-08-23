import {MailModel} from '../../../../model/mail.model';
import {ChatRoomModel} from '../../../../model/chatRoom.model';
import {Observable} from 'rxjs';
import {IMessage} from '@stomp/stompjs';

export abstract class ContactService {
  public abstract sendMail(mailDto: MailModel);
  public abstract getChatRooms(): Promise<Array<ChatRoomModel>>;
  public abstract subscribeRoom(roomId: string): Observable<IMessage>;
  public abstract publishMessage(chatMessage: string): void;
}
