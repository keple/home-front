import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {IMessage} from '@stomp/stompjs';

@Injectable()
export class ChatService {
  private currentRoomId: string;
  private messages: Observable<IMessage>;
  constructor() {
  }
  setCurrentRoom(roomId: string): void {
    this.currentRoomId = roomId;
  }
  getCurrentRoom(): string {
    return this.currentRoomId;
  }
}
