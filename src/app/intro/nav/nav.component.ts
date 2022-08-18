import {Component, Input, OnInit} from '@angular/core';

import {CommonService} from '../../../services/abstract/common.service';
import {MenuDto} from '../../../model/MenuDto';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {UserAuthComponent} from '../user-auth/user-auth.component';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatDrawer} from '@angular/material/sidenav';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  menuList: Array<MenuDto>;
  navigateName: string;
  private dialogRef;
  @Input() drawer: MatDrawer;
  constructor(private commonService: CommonService, private dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    this.menuList = [];
  }
  openDialog(): void {
    this.dialogRef = this.dialog.open(UserAuthComponent , {
      width: '450px',
      height: '600px'
    });
    const subscribeDialog = this.dialogRef.componentInstance.authenticationEvent.subscribe((data) => {
      console.log('dialog data' , data);
      this.commonService.getMenuList().then((menuList) => {
        console.log('reset menu', this.menuList);
        this.menuList = menuList;
      });
    });
    this.dialogRef.afterClosed().subscribe(result => {
      subscribeDialog.unsubscribe();
    });
  }
}
