import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { AppComponent } from './app.component';
import { NavComponent } from './intro/nav/nav.component';
import { MainFrameComponent } from './mainFrame/mainFrame.component';
import { MenuItemComponent } from './intro/menu-item/menu-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MockServiceModule} from './intro/services/mocks/mockService.module';
import { SearchViewComponent } from './search-view/search-view.component';
import { AppRoutingModule } from './app-routing.module';
import { FileViewComponent } from './intro/file-view/file-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { MiniCardComponent } from './intro/mini-card/mini-card.component';
import {ComponentModule} from '../resources/component.module';
import {ServiceModule} from './intro/services/api/service.module';
import { UserAuthComponent } from './intro/user-auth/user-auth.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule} from '@angular/forms';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ErrorResponseContentComponent } from './error-response-content/error-response-content.component';
import { FooterComponent } from './footer/footer.component';
import {MatOptionModule} from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AboutComponent } from './intro/about/about.component';
import { ProjectHealthCheckComponent } from './intro/project-health-check/project-health-check.component';
import { CareerComponent } from './intro/career/career.component';
import {MatListModule} from '@angular/material/list';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {DialogModule} from './configuration/dialog.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ContactComponent } from './intro/contact/contact.component';
import {MatTabsModule} from '@angular/material/tabs';
import {AdminModule} from './admin/admin.module';
import { IntroNavigationComponent } from './intro/intro-navigation/intro-navigation.component';
import {NavigationScrollConnector} from './connector/navigationScrollConnector';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { RouteIndexComponent } from './route-index/route-index.component';
import {
  RECAPTCHA_LANGUAGE, RECAPTCHA_SETTINGS,
  RECAPTCHA_V3_SITE_KEY,
  RecaptchaFormsModule,
  RecaptchaModule,
  RecaptchaV3Module
} from 'ng-recaptcha';
import {IntroGuard} from "./guard/IntroGuard";
import { WorkingDialogComponent } from './working-dialog/working-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainFrameComponent,
    MenuItemComponent,
    SearchViewComponent,
    FileViewComponent,
    DashboardComponent,
    MiniCardComponent,
    UserAuthComponent,
    SideMenuComponent,
    ErrorResponseContentComponent,
    FooterComponent,
    AboutComponent,
    ProjectHealthCheckComponent,
    CareerComponent,
    ContactComponent,
    IntroNavigationComponent,
    WelcomePageComponent,
    RouteIndexComponent,
    WorkingDialogComponent,
  ],

  imports: [
    AdminModule,
    HttpClientModule,
    MarkdownModule.forRoot({loader: HttpClient}),
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatExpansionModule,
    MatMenuModule,
    MatButtonModule,
    ServiceModule,
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    ComponentModule,
    DialogModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
    MatSnackBarModule,
    MatOptionModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    RecaptchaFormsModule,
    RecaptchaModule
  ],
  providers: [
    NavigationScrollConnector,
    IntroGuard,
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {siteKey: '6LeXtYYhAAAAAPOJbs37_ttAbzZweep4Fz80cXkh'},
    },

  ],
  bootstrap: [WelcomePageComponent]
})
export class AppModule { }
