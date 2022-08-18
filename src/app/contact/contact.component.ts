import {Component, ElementRef, OnInit, Output, EventEmitter} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ContactService} from '../../services/abstract/ContactService';
import {MainFrameComponent} from '../mainFrame/mainFrame.component';
import {NavigationScrollConnector} from '../connector/navigationScrollConnector';
import {state, style, transition, trigger, useAnimation} from '@angular/animations';
import {componentShowup} from '../animation/ComponentShowAnimation';
import {ReCaptchaV3Service} from "ng-recaptcha";

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
  public title: string;
  public contents: string;
  public inShowArea = false;
  public name: string;
  constructor(private snackBar: MatSnackBar,
              private contactService: ContactService,
              private elRef: ElementRef,
              private containerScrollRef: MainFrameComponent,
              private navigationConnector: NavigationScrollConnector,
              private recaptchaV3Service: ReCaptchaV3Service) { }
  ngOnInit(): void {
    this.containerScrollRef.scrollEvent.subscribe(scroll => {
      if (this.elRef.nativeElement.offsetTop <= (scroll.scrollTop + 400) && !this.inShowArea) {
        console.log('chage to true');
        this.inShowArea = true;
      }
      if  (this.elRef.nativeElement.offsetTop <= scroll.scrollTop &&
        (this.elRef.nativeElement.offsetTop + this.elRef.nativeElement.getBoundingClientRect().height) >= scroll.scrollTop){
        this.navigationConnector.setActive('contact');
      }
    });
  }

  submit(): void {
    console.log('submit message' , this.title , this.contents);
    this.contactService.sendMail(this.title, this.contents);
  }
  resolved($event): void {
    console.log($event);
  }
  enterRoom(roomId): void {
    this.snackBar.open(`${roomId}` , 'close', {duration: 2500});
    // chat server에 연결
  }
  preSend(): void {
    this.recaptchaV3Service.execute('beforeSendAction').subscribe((token)=> {
      console.log('token',token);
      // this.handleToken(token);
    });
  }
}
