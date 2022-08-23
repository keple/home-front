import {Component, ElementRef, OnInit, Output, EventEmitter} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ContactService} from '../services/abstract/contact.service';
import {MainFrameComponent} from '../../mainFrame/mainFrame.component';
import {NavigationScrollConnector} from '../../connector/navigationScrollConnector';
import {state, style, transition, trigger, useAnimation} from '@angular/animations';
import {componentShowup} from '../../animation/ComponentShowAnimation';
import {MailModel} from "../../../model/mail.model";
import {ChatRoomModel} from "../../../model/chatRoom.model";
import {ChatService} from "../services/chat.service";
import {ChatMessageModel} from "../../../model/chatMessage.model";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('inShowArea' , [
      state('show' , style({opacity : 1})),
      state('none' , style({opacity : 0})),
      transition('none=>show',
        useAnimation(componentShowup , {})
      )
    ])
  ]
})
export class ContactComponent implements OnInit {
  @Output() inPositionEvent = new EventEmitter();
  public inShowArea = false;
  public mailDto: MailModel;
  public chatRooms: Array<ChatRoomModel>;
  public messages: Array<ChatMessageModel> = [];
  public chatMessage: string;
  constructor(private snackBar: MatSnackBar,
              private contactService: ContactService,
              private elRef: ElementRef,
              private containerScrollRef: MainFrameComponent,
              private navigationConnector: NavigationScrollConnector,
              private chatService: ChatService
              ) { }
  ngOnInit(): void {
    this.mailDto = new MailModel({title : '' , contents : '' , mailerName : '' , captcha : ''});
    this.containerScrollRef.scrollEvent.subscribe(scroll => {
      if (this.elRef.nativeElement.offsetTop <= (scroll.scrollTop + 700) && !this.inShowArea) {
        console.log('chage to true');
        this.inShowArea = true;
      }
      if  (this.elRef.nativeElement.offsetTop <= scroll.scrollTop &&
        (this.elRef.nativeElement.offsetTop + this.elRef.nativeElement.getBoundingClientRect().height) >= scroll.scrollTop){
        this.navigationConnector.setActive('contact');
      }
    });
    this.contactService.getChatRooms().then((data) => {
      this.chatRooms = data;
    });
  }

  submit(): void {
    console.log('submit message' , this.mailDto);
    // this.contactService.sendMail(this.mailDto);
  }
  resolved($event): void {
    console.log($event);
  }
  enterRoom(roomId): void {
    this.snackBar.open(`${roomId}` , 'close', {duration: 2500});
    // chat server에 연결
    const messages = this.contactService.subscribeRoom(roomId);
    messages.subscribe((message) => {
      // @ts-ignore
      const received = new ChatMessageModel(JSON.parse(message.body));
      this.messages.push(received);
      this.chatService.setCurrentRoom(roomId);
    });
  }
  publishChatMessage(): void {
    this.contactService.publishMessage(this.chatMessage);
  }
}
