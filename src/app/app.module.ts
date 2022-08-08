import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MainFrameComponent } from './mainFrame/mainFrame.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MockServiceModule} from '../services/mocks/mockService.module';
import { SearchViewComponent } from './search-view/search-view.component';
import { AppRoutingModule } from './app-routing.module';
import { FileViewComponent } from './file-view/file-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { MiniCardComponent } from './mini-card/mini-card.component';
import {ResourceModule} from '../resources/resource.module';
import { FileManagementComponent } from './file-management/file-management.component';
import {ServiceModule} from '../services/api/service.module';
import { UserAuthComponent } from './user-auth/user-auth.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule} from '@angular/forms';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ErrorResponseContentComponent } from './error-response-content/error-response-content.component';
import { FooterComponent } from './footer/footer.component';
import {MatOptionModule} from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AboutComponent } from './about/about.component';
import { ProjectHealthCheckComponent } from './project-health-check/project-health-check.component';
import { CareerComponent } from './career/career.component';
import {MatListModule} from '@angular/material/list';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {DialogModule} from './dialog/DialogModule';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import {MatTabsModule} from '@angular/material/tabs';
import {AdminModule} from './admin/admin.module';

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
    FileManagementComponent,
    UserAuthComponent,
    SideMenuComponent,
    ErrorResponseContentComponent,
    FooterComponent,
    AboutComponent,
    ProjectHealthCheckComponent,
    CareerComponent,
    ContactComponent,

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
    ResourceModule,
    DialogModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
    MatSnackBarModule,
    MatOptionModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [MainFrameComponent]
})
export class AppModule { }
