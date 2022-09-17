import { Component, OnInit } from '@angular/core';
import {PortfolioService} from '../service/portfolio.service';
import {ServiceModel} from '../../../model/service.model';
import {AdminServicesModel} from '../model/admin.services.model';

@Component({
  selector: 'app-admin-portfolio-management',
  templateUrl: './admin-portfolio-management.component.html',
  styleUrls: ['./admin-portfolio-management.component.css']
})
export class AdminPortfolioManagementComponent implements OnInit {
  public portFolioList: Array<AdminServicesModel>;
  public displayedColumns: Array<string>;
  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.displayedColumns = ['serviceName' , 'serviceActuatorUrl' , 'tech', 'serviceRouteUrl' , 'updateButton', 'deleteButton'];
    this.portfolioService.getPortfolioList().then(data => this.portFolioList = data);
  }
  update(serviceName: string): void{
    // test
    console.log(serviceName);
  }
  delete(serviceName: string): void {
    // test
    console.log(serviceName);
  }

}
