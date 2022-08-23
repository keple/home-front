import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminFileManagementComponent} from './admin-file-management/admin-file-management.component';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import {MainFrameComponent} from '../mainFrame/mainFrame.component';
import {AdminGuard} from '../guard/AdminGuard';


const routes: Routes = [
  {path: 'admin' , component: MainFrameComponent, canActivate: [AdminGuard]
    , children: [
      {path: '', component: AdminPanelComponent, canActivate: [AdminGuard]},
      {path: 'filemanagement', component: AdminFileManagementComponent, canActivate: [AdminGuard]}
    ]}
  ]
;

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRouteModule { }
