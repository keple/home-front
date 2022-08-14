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
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbar, MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {AdminServiceModule} from './service/admin.service.module';
import {AdminDialogModule} from './dialogs/AdminDialog.module';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatCardModule} from "@angular/material/card";
import {MatChipsModule} from "@angular/material/chips";

@NgModule({
  declarations : [
    AdminPanelComponent,
    AdminFileManagementComponent,
    AdminPortfolioManagementComponent,
    AdminUserManagementComponent,
  ],
  imports : [
    AdminRouteModule,
    AdminDialogModule,
    ComponentModule,
    AdminServiceModule,
    BrowserModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    MatDialogModule,
    MatTooltipModule,
    MatExpansionModule,
    MatCardModule,
    MatChipsModule
  ],
  exports : [
    AdminPanelComponent,
    AdminFileManagementComponent
  ]
})

export class AdminModule {}
