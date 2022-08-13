import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, keyframes, state, style, transition, trigger, useAnimation} from '@angular/animations';
import {MainFrameComponent} from '../mainFrame/mainFrame.component';
import {componentShowup} from '../animation/ComponentShowAnimation';
import {NavigationScrollConnector} from "../connector/navigationScrollConnector";

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
    ])
  ]
})
export class AboutComponent implements OnInit , AfterViewInit {
  @Output() loadEvent = new EventEmitter();
  inposition: boolean;
  inShowArea: boolean;
  constructor(private elRef: ElementRef ,
              private containerScrollRef: MainFrameComponent,
              private navigationConnector: NavigationScrollConnector) {
  }

  ngOnInit(): void {
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
  }

  ngAfterViewInit(): void {
    this.loadEvent.emit({});
  }

}
