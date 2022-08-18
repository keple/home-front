import {NgModule} from '@angular/core';
import {CommonImplService} from './common/common.impl.service';
import {CommonService} from '../abstract/common.service';
import {ResourceService} from '../abstract/resource.service';
import {ResourceServiceImpl} from './resource/ResourceServiceImpl';
import {ApiConfigModule} from '../../app/configuration/api.module';
import {ContactImplService} from './contact/contact.impl.service';
import {ContactService} from '../abstract/contact.service';
import {WebsocketService} from './WebsocketService';


@NgModule({
  declarations: [
  ],
  imports: [
    ApiConfigModule,
  ],
  providers: [
    {provide : CommonService, useClass : CommonImplService},
    {provide : ResourceService, useClass : ResourceServiceImpl},
    {provide : ContactService, useClass : ContactImplService},
    WebsocketService
  ],
})

export class ServiceModule {}
