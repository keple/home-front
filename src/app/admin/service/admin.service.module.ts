import {NgModule} from '@angular/core';
import {FileManagementService} from './file-management.service';
import {ApiConfigModule} from '../../configuration/api.module';
import {PortfolioService} from "./portfolio.service";
import {UserService} from "./user.service";

@NgModule({
 providers : [
   FileManagementService,
   PortfolioService,
   UserService
 ],
  imports : [
    ApiConfigModule
  ]
})


export class AdminServiceModule {}
