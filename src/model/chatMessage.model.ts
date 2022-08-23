
export class ChatMessageModel {
  roomId: string;
  message: string;
  userName: string;
  messageType: string;
  constructor({roomId , message , userName , messageType}) {
    this.roomId = roomId;
    this.message = message;
    this.userName = userName;
    this.messageType = messageType;
  }
}
