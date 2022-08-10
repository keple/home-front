import {NgModule} from '@angular/core';
import {FileManagementService} from './fileManagement.service';
import {ApiConfigModule} from '../../configuration/ApiConfig.module';

@NgModule({
 providers : [
  FileManagementService
 ],
  imports : [
    ApiConfigModule
  ]
})


export class AdminServiceModule {}
