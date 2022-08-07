import {NgModule} from '@angular/core';
import {CommonServiceMock} from './common/commonServiceMock';
import {CommonService} from '../abstract/CommonService';


@NgModule({
  declarations: [

  ],
  imports: [

  ],
  providers: [
    {provide : CommonService, useClass : CommonServiceMock}
  ],
})

export class MockServiceModule {}
