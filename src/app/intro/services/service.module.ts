import {NgModule} from '@angular/core';
import {CommonImplService} from './api/common/common.impl.service';
import {CommonService} from './abstract/common.service';
import {ResourceService} from './abstract/resource.service';
import {ResourceServiceImpl} from './api/resource/ResourceServiceImpl';
import {ApiConfigModule} from '../../configuration/api.module';
import {ContactImplService} from './api/contact/contact.impl.service';
import {ContactService} from './abstract/contact.service';
import {ChatService} from './chat.service';


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
    {provide : ChatService, useClass: ChatService}
  ],
})

export class ServiceModule {}
