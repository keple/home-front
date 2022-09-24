import { Component, OnInit } from '@angular/core';
import {AdminUserModel} from '../model/admin.user.model';
import {UserService} from '../service/user.service';
import {MatDialog} from "@angular/material/dialog";
import {ConfirmDialogComponent} from "../dialogs/confirm-dialog/confirm-dialog.component";

@Component({
  selector: 'app-admin-user-management',
  templateUrl: './admin-user-management.component.html',
  styleUrls: ['./admin-user-management.component.css']
})
export class AdminUserManagementComponent implements OnInit {
  public userList: Array<AdminUserModel>;
  public userInfo: AdminUserModel;
  constructor(private userService: UserService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.userService.getUserList().then(data => {
      this.userList = data;
    });
  }
  getUserDetail(userId: string): void {
    this.userService.getUserDetail(userId).then(data => {
      this.userInfo = data;
    });
  }
  openConfirmModal() {
    // todo
    const dialogResult = this.dialog.open(ConfirmDialogComponent , {
      width: `400px`,
      height: `200px`
    });
    dialogResult.afterClosed().subscribe(result => {
      // request delete
    });
  }
  openUpdateModal() {
    // todo
  }
}
