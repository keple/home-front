import { NgModule } from '@angular/core';
import { SearchViewComponent } from './search-view/search-view.component';
import { AppRoutingModule } from './app-routing.module';
import {ComponentModule} from '../resources/component.module';
import {DialogModule} from './configuration/dialog.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AdminModule} from './admin/admin.module';
import {NavigationScrollConnector} from './connector/navigationScrollConnector';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { RouteIndexComponent } from './route-index/route-index.component';
import {IntroGuard} from './guard/IntroGuard';
import { WorkingDialogComponent } from './working-dialog/working-dialog.component';
import {IntroModule} from './intro/intro.module';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {rxstompFactory} from './intro/services/rxstomp.factory';
import {RxstompService} from './intro/services/rxstomp.service';
import {AdminGuard} from './guard/AdminGuard';
import {ApiConfig} from './configuration/api.config';
import {GuardValidationService} from './intro/services/guard.validation.service';
import {ApiConfigModule} from './configuration/api.module';
import {InterestModule} from "./interest/interest.module";

@NgModule({
  declarations: [
    SearchViewComponent,
    WelcomePageComponent,
    RouteIndexComponent,
    WorkingDialogComponent,
  ],
  imports: [
    AdminModule,
    IntroModule,
    InterestModule,
    ApiConfigModule,
    HttpClientModule,
    AppRoutingModule,
    ComponentModule,
    DialogModule,
    MatDividerModule,
    MatFormFieldModule
  ],
  providers: [
    NavigationScrollConnector,
    IntroGuard,
    AdminGuard,
    {
      provide: RxstompService,
      useFactory: rxstompFactory
    },
    {
      provide: GuardValidationService,
      useClass: GuardValidationService
    }
  ],
  bootstrap: [WelcomePageComponent]
})
export class AppModule { }
