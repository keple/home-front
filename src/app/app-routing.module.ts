import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from '@angular/router';
import {SearchViewComponent} from './search-view/search-view.component';
import {FileViewComponent} from './intro/file-view/file-view.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UserAuthComponent} from './intro/user-auth/user-auth.component';
import {CreateFileDialogComponent} from './admin/dialogs/create-file-dialog/create-file-dialog.component';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {RouteIndexComponent} from './route-index/route-index.component';
import {MainFrameComponent} from './mainFrame/mainFrame.component';
import {IntroGuard} from './guard/IntroGuard';

const routes: Routes = [
  {path: '', component: RouteIndexComponent },
  {path: 'intro/:token', component: MainFrameComponent, canActivate: [IntroGuard]
    , children: [
      {path: '', component: DashboardComponent}
    ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
