import {NgModule} from '@angular/core';
import {AppComponent} from '../app.component';
import {NavComponent} from './nav/nav.component';
import {MainFrameComponent} from '../mainFrame/mainFrame.component';
import {MenuItemComponent} from './menu-item/menu-item.component';
import {FileViewComponent} from './file-view/file-view.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {MiniCardComponent} from './mini-card/mini-card.component';
import {UserAuthComponent} from './user-auth/user-auth.component';
import {SideMenuComponent} from '../side-menu/side-menu.component';
import {ErrorResponseContentComponent} from '../error-response-content/error-response-content.component';
import {FooterComponent} from './footer/footer.component';
import {AboutComponent} from './about/about.component';
import {ProjectHealthCheckComponent} from './project-health-check/project-health-check.component';
import {CareerComponent} from './career/career.component';
import {ContactComponent} from './contact/contact.component';
import {IntroNavigationComponent} from './intro-navigation/intro-navigation.component';
import {MarkdownModule} from 'ngx-markdown';
import {HttpClient} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {ServiceModule} from './services/api/service.module';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatOptionModule} from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule} from 'ng-recaptcha';
import {NavigationScrollConnector} from '../connector/navigationScrollConnector';
import {AppRoutingModule} from '../app-routing.module';
import {UtilityModule} from './utils/utility.module';
import {Typing} from './utils/Typing.util';
import {MatChipsModule} from "@angular/material/chips";


@NgModule({
  declarations : [
    AppComponent,
    NavComponent,
    MainFrameComponent,
    MenuItemComponent,
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
  ],
  imports: [
    MarkdownModule.forRoot({loader: HttpClient}),
    AppRoutingModule,
    UtilityModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatExpansionModule,
    MatMenuModule,
    MatButtonModule,
    ServiceModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
    MatSnackBarModule,
    MatOptionModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    RecaptchaFormsModule,
    RecaptchaModule,
    MatChipsModule
  ],
  providers : [
    Typing,
    NavigationScrollConnector,
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {siteKey: '6LeXtYYhAAAAAPOJbs37_ttAbzZweep4Fz80cXkh'},
    },
  ]
})


export class IntroModule {}
