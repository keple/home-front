import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {WorkingDialogComponent} from '../working-dialog/working-dialog.component';
import {UserAuthComponent} from '../intro/user-auth/user-auth.component';

@Component({
  selector: 'app-route-index',
  templateUrl: './route-index.component.html',
  styleUrls: ['./route-index.component.css']
})
export class RouteIndexComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }
  openWorkingDialog() {
    this.matDialog.open(WorkingDialogComponent , {
      width: `600px`,
      height: `400px`
    });
  }
  openIntroAccessHelper() {
  }
  openLoginDialog() {
    this.matDialog.open(UserAuthComponent , {
      width: `400px`,
      height: `600px`
    });
  }
}
