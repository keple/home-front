import {Component, ElementRef, OnInit, Output, SecurityContext, EventEmitter} from '@angular/core';
import {animate, keyframes, state, style, transition, trigger, useAnimation} from '@angular/animations';
import {ResourceService} from '../services/abstract/resource.service';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {MainFrameComponent} from "../../mainFrame/mainFrame.component";
import {componentShowup} from "../../animation/ComponentShowAnimation";
import {NavigationScrollConnector} from "../../connector/navigationScrollConnector";

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css'],
  animations : [
    trigger('slideTimeLine' , [
      state('show' , style({
        display: 'block'
      })),
      state('disable' , style({
        display: 'none'
      })),
      transition('disable=>show',
        animate('1.2s ease' , keyframes([
          style({display: 'block', opacity: 0 , transform: `translateX(-100px)`}),
          style({opacity: .3 , transform: `translateX(-50px)`}),
          style({opacity: 1 , transform: `translateX(0px)`}),
        ]))
      ),
    ]),
    trigger('inShowArea' , [
      state('show' , style({opacity : 1})),
      state('none' , style({opacity : 0})),
      transition('none=>show',
        useAnimation(componentShowup , {})
      )
    ])
  ]
})
export class CareerComponent implements OnInit {
  @Output() inPositionEvent = new EventEmitter();
  private pageNum: number;
  public inShowArea = false;
  public pageSrcBlob: Array<SafeResourceUrl>;
  constructor(private resourceService: ResourceService,
              private sanitizer: DomSanitizer,
              private elRef: ElementRef ,
              private containerScrollRef: MainFrameComponent,
              private navigationConnector: NavigationScrollConnector) { }

  ngOnInit(): void {
    this.pageNum = 1;
    this.pageSrcBlob = [];
    this.resourceService.getFileForViewer('nextlab').then((data) => {
      this.pageSrcBlob[0] = URL.createObjectURL(new Blob([data] , { type: 'text/plain' }));
    });
    this.resourceService.getFileForViewer('gridwiz').then((data) => {
      this.pageSrcBlob[1] = URL.createObjectURL(new Blob([data] , { type: 'text/plain' }));
    });
    this.containerScrollRef.scrollEvent.subscribe(scroll => {
      if (this.elRef.nativeElement.offsetTop <= (scroll.scrollTop + 700) && !this.inShowArea) {
        console.log('chage to true');
        this.inShowArea = true;
      }
      if  (this.elRef.nativeElement.offsetTop <= scroll.scrollTop &&
        (this.elRef.nativeElement.offsetTop + this.elRef.nativeElement.getBoundingClientRect().height) >= scroll.scrollTop){
        this.navigationConnector.setActive('career');
      }
    });
  }
  showPageNum(pageNum, careerType): void {
      this.pageNum = pageNum;

  }
  getCurrentPageNum(): number {
    return this.pageNum;
  }
}
