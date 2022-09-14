import {NgModule} from '@angular/core';
import {FileManagementService} from './fileManagement.service';
import {ApiConfigModule} from '../../configuration/api.module';
import {PortfolioService} from "./portfolio.service";

@NgModule({
 providers : [
   FileManagementService,
   PortfolioService
 ],
  imports : [
    ApiConfigModule
  ]
})


export class AdminServiceModule {}
