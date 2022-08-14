import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminFileManagementComponent} from './admin-file-management/admin-file-management.component';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';


const routes: Routes = [
  ]
;

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRouteModule { }
