import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminFileManagementComponent} from './admin-file-management/admin-file-management.component';


const routes: Routes = [
  {path: '/admin/fileManagement', component: AdminFileManagementComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
