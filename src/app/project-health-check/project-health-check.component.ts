import {Component, ElementRef, OnInit} from '@angular/core';
import {ServiceDto} from '../../model/ServiceDto';
import {CommonService} from '../../services/abstract/CommonService';
import {MainFrameComponent} from "../mainFrame/mainFrame.component";

@Component({
  selector: 'app-project-health-check',
  templateUrl: './project-health-check.component.html',
  styleUrls: ['./project-health-check.component.css']
})
export class ProjectHealthCheckComponent implements OnInit {
  public projectList: Array<ServiceDto>;
  inShowArea = false;
  constructor(private commonService: CommonService,
              private elRef: ElementRef,
              private containerScrollRef: MainFrameComponent) { }

  ngOnInit(): void {
    this.commonService.getProjects().then((data) => {
      this.projectList = data;
    });
    this.containerScrollRef.scrollEvent.subscribe(scroll => {
      if (this.elRef.nativeElement.offsetTop <= (scroll.scrollTop + 400) && !this.inShowArea) {
        console.log('chage to true');
        this.inShowArea = true;
      }
    });
  }

}
