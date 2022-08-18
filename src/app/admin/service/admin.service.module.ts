import {NgModule} from '@angular/core';
import {FileManagementService} from './fileManagement.service';
import {ApiConfigModule} from '../../configuration/api.module';

@NgModule({
 providers : [
  FileManagementService
 ],
  imports : [
    ApiConfigModule
  ]
})


export class AdminServiceModule {}
