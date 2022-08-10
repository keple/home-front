import {NgModule} from '@angular/core';
import {CommonServiceImpl} from './common/commonServiceImpl';
import {CommonService} from '../abstract/CommonService';
import {ResourceService} from '../abstract/ResourceService';
import {ResourceServiceImpl} from './resource/ResourceServiceImpl';
import {ApiConfigModule} from '../../app/configuration/ApiConfig.module';
import {ContactServiceImpl} from './contact/ContactServiceImpl';
import {ContactService} from '../abstract/ContactService';
import {WebsocketService} from './WebsocketService';


@NgModule({
  declarations: [
  ],
  imports: [
    ApiConfigModule,
  ],
  providers: [
    {provide : CommonService, useClass : CommonServiceImpl},
    {provide : ResourceService, useClass : ResourceServiceImpl},
    {provide : ContactService, useClass : ContactServiceImpl},
    WebsocketService
  ],
})

export class ServiceModule {}
