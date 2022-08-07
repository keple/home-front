import { Component, OnInit } from '@angular/core';
import {ServiceDto} from '../../model/ServiceDto';
import {CommonService} from '../../services/abstract/CommonService';

@Component({
  selector: 'app-project-health-check',
  templateUrl: './project-health-check.component.html',
  styleUrls: ['./project-health-check.component.css']
})
export class ProjectHealthCheckComponent implements OnInit {
  public projectList: Array<ServiceDto>;
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.getProjects().then((data) => {
      this.projectList = data;
    });
  }

}
