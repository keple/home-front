import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from '@angular/router';
import {SearchViewComponent} from './search-view/search-view.component';
import {FileViewComponent} from './file-view/file-view.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UserAuthComponent} from './user-auth/user-auth.component';
import {CreateFileDialogComponent} from "./admin/dialogs/create-file-dialog/create-file-dialog.component";

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'createDialog' , component: CreateFileDialogComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
