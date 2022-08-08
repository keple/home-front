import {NgModule} from '@angular/core';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import {AdminFileManagementComponent} from './admin-file-management/admin-file-management.component';

@NgModule({
  declarations : [
    AdminPanelComponent,
    AdminFileManagementComponent
  ],
  exports : [
    AdminPanelComponent,
    AdminFileManagementComponent
  ]
})

export class AdminModule {}
