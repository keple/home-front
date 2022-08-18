import {Component, ElementRef, OnInit, EventEmitter, Output} from '@angular/core';
import {ServiceDto} from '../../../model/ServiceDto';
import {CommonService} from '../../../services/abstract/common.service';
import {MainFrameComponent} from '../../mainFrame/mainFrame.component';
import {NavigationScrollConnector} from '../../connector/navigationScrollConnector';
import {state, style, transition, trigger, useAnimation} from '@angular/animations';
import {componentShowup} from '../../animation/ComponentShowAnimation';

@Component({
  selector: 'app-project-health-check',
  templateUrl: './project-health-check.component.html',
  styleUrls: ['./project-health-check.component.css'],
  animations : [
    trigger('inShowArea' , [
      state('show' , style({opacity : 1})),
      state('none' , style({opacity : 0})),
      transition('none=>show',
        useAnimation(componentShowup , {})
      )
    ])
  ]
})
export class ProjectHealthCheckComponent implements OnInit {
  public projectList: Array<ServiceDto>;
  inShowArea = false;
  constructor(private commonService: CommonService,
              private elRef: ElementRef,
              private containerScrollRef: MainFrameComponent,
              private navigationConnector: NavigationScrollConnector) { }

  ngOnInit(): void {
    this.commonService.getProjects().then((data) => {
      this.projectList = data;
    });
    this.containerScrollRef.scrollEvent.subscribe(scroll => {
      if (this.elRef.nativeElement.offsetTop <= (scroll.scrollTop + 700) && !this.inShowArea) {
        console.log('chage to true');

        this.inShowArea = true;
      }
      if (this.elRef.nativeElement.offsetTop <= scroll.scrollTop &&
        (this.elRef.nativeElement.offsetTop + this.elRef.nativeElement.getBoundingClientRect().height) >= scroll.scrollTop){
        this.navigationConnector.setActive('project');
      }
    });
  }

}
