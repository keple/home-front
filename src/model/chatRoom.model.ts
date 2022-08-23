
export class ChatRoomModel {
  public roomId: string;
  public roomName: string;
  constructor({roomId , roomName}) {
    this.roomId = roomId;
    this.roomName = roomName;
  }
}
