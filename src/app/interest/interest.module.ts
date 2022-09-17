import {NgModule} from '@angular/core';
import { InterestContainerCompoenentComponent } from './interest-container-compoenent/interest-container-compoenent.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import { InstSideMenuComponent } from './inst-side-menu/inst-side-menu.component';
import { InstContentsComponent } from './inst-contents/inst-contents.component';
import { InstNavComponent } from './inst-nav/inst-nav.component';
import {MatChipsModule} from "@angular/material/chips";

@NgModule({
  providers: [],
  imports: [
    MatSidenavModule,
    MatChipsModule
  ],
  declarations: [
    InterestContainerCompoenentComponent,
    InstSideMenuComponent,
    InstContentsComponent,
    InstNavComponent
  ]
})

export class InterestModule {}
