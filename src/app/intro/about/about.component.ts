import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, keyframes, state, style, transition, trigger, useAnimation} from '@angular/animations';
import {MainFrameComponent} from '../../mainFrame/mainFrame.component';
import {blinkAnimation, componentShowup} from '../../animation/ComponentShowAnimation';
import {NavigationScrollConnector} from '../../connector/navigationScrollConnector';
import {Typing} from '../utils/Typing.util';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('inShowArea' , [
      state('show' , style({opacity : 1})),
      state('none' , style({opacity : 0})),
      transition('none=>show',
        useAnimation(componentShowup)
      )
    ]),
  ]
})
export class AboutComponent implements OnInit , AfterViewInit {
  @Output() loadEvent = new EventEmitter();
  inposition: boolean;
  inShowArea: boolean;
  cursorActive: boolean;
  displayText: string;
  constructor(private elRef: ElementRef ,
              private containerScrollRef: MainFrameComponent,
              private navigationConnector: NavigationScrollConnector,
              private typing: Typing) {
  }

  ngOnInit(): void {
    this.cursorActive = true;
    this.displayText = '';
    this.inShowArea = false;
    this.containerScrollRef.scrollEvent.subscribe(scroll => {
      // parent 스크롤이 자신의 offset 영역에 들어온경우 isShowArea의 값을 true로 변경한다.
      // console.log('get scroll event' , this.elRef.nativeElement.offsetTop , scroll.scrollTop);
      if (this.elRef.nativeElement.offsetTop <= scroll.scrollTop && !this.inShowArea) {
        console.log('chage to true');
        console.log('offset bottom' , this.elRef.nativeElement.getBoundingClientRect());
        this.inShowArea = true;
      }
      if  (this.elRef.nativeElement.offsetTop <= scroll.scrollTop &&
        (this.elRef.nativeElement.offsetTop + this.elRef.nativeElement.getBoundingClientRect().height) >= scroll.scrollTop){
        this.navigationConnector.setActive('about');
      }
    });
    this.typing.getDisplayText().subscribe((newText) => {
      // cursor 상태를 write로 변경

      // length check
      if ((this.displayText.length) < this.typing.getTargetText().length) {
        setTimeout(() => {
          this.displayText = newText;
          this.typing.setText(this.displayText + this.typing.getTargetText()[this.displayText.length]);
          if (this.displayText.length === this.typing.getTargetText().length){
            this.cursorActive = false;
          }
        }, 200);
      }
    });
    // start
    this.typing.setText(this.typing.getTargetText()[0]);
  }

  ngAfterViewInit(): void {
    this.loadEvent.emit({});
  }

}
