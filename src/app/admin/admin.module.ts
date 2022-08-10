import {NgModule} from '@angular/core';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import {AdminFileManagementComponent} from './admin-file-management/admin-file-management.component';
import {AdminRouteModule} from './admin.route.module';
import {ComponentModule} from '../../resources/component.module';
import {BrowserModule} from '@angular/platform-browser';
import {MatListModule} from '@angular/material/list';
import {FileManagementService} from './service/fileManagement.service';
import {AdminPortfolioManagementComponent} from './admin-portfolio-management/admin-portfolio-management.component';
import {AdminUserManagementComponent} from './admin-user-management/admin-user-management.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations : [
    AdminPanelComponent,
    AdminFileManagementComponent,
    AdminPortfolioManagementComponent,
    AdminUserManagementComponent,
  ],
  imports : [
    ComponentModule,
    AdminRouteModule,
    BrowserModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  exports : [
    AdminPanelComponent,
    AdminFileManagementComponent
  ]
})

export class AdminModule {}
