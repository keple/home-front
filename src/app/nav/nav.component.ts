import { Component, OnInit } from '@angular/core';

import {CommonService} from '../../services/abstract/CommonService';
import {MenuDto} from '../../model/MenuDto';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {UserAuthComponent} from '../user-auth/user-auth.component';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  animations: [
    trigger('hover', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class NavComponent implements OnInit {
  menuList: Array<MenuDto>;
  navigateName: string;
  private dialogRef;
  constructor(private commonService: CommonService, private dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    console.log('nav init!');
    this.menuList = [];
    this.commonService.getMenuList().then((data) => {
      console.log(data);
      this.menuList = data;
    });
    this.router.events
      .subscribe((event: NavigationEnd) => {
        // You only receive NavigationStart events
        if (event instanceof  NavigationEnd){
          console.log(event.url);
          const navigationMatch = this.menuList.filter(x => x.getPath() === event.url);
          if (navigationMatch.length === 0){
            this.navigateName = 'Unknown';
          }else{
            this.navigateName = navigationMatch[0].getDisplayName();
          }
        }
      });
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
