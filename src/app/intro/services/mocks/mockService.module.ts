import {NgModule} from '@angular/core';
import {CommonMockService} from './common/common.mock.service';
import {CommonService} from '../abstract/common.service';


@NgModule({
  declarations: [

  ],
  imports: [

  ],
  providers: [
    {provide : CommonService, useClass : CommonMockService}
  ],
})

export class MockServiceModule {}
