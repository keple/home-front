import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {WorkingDialogComponent} from '../working-dialog/working-dialog.component';
import {UserAuthComponent} from '../intro/user-auth/user-auth.component';
import {Router} from "@angular/router";

@Component({
  selector: 'app-route-index',
  templateUrl: './route-index.component.html',
  styleUrls: ['./route-index.component.css']
})
export class RouteIndexComponent implements OnInit {

  constructor(private matDialog: MatDialog, private router: Router) { }

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
  openInterest(): void {
    this.router.navigate(['/interest']);
  }
  openLoginDialog() {
    this.matDialog.open(UserAuthComponent , {
      width: `400px`,
      height: `600px`
    });
  }
}
