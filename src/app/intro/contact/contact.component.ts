import {Component, ElementRef, OnInit, Output, EventEmitter} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ContactService} from '../../../services/abstract/contact.service';
import {MainFrameComponent} from '../../mainFrame/mainFrame.component';
import {NavigationScrollConnector} from '../../connector/navigationScrollConnector';
import {state, style, transition, trigger, useAnimation} from '@angular/animations';
import {componentShowup} from '../../animation/ComponentShowAnimation';
import {ReCaptchaV3Service} from "ng-recaptcha";
import {MailDto} from "../../../model/MailDto";

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
  public mailDto: MailDto;
  constructor(private snackBar: MatSnackBar,
              private contactService: ContactService,
              private elRef: ElementRef,
              private containerScrollRef: MainFrameComponent,
              private navigationConnector: NavigationScrollConnector,
              ) { }
  ngOnInit(): void {
    this.mailDto = new MailDto({title : '' , contents : '' , mailerName : '' , captcha : ''});
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
  }
}
