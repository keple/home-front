import { Component, OnInit } from '@angular/core';
import {AdminUserModel} from '../model/admin.user.model';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-admin-user-management',
  templateUrl: './admin-user-management.component.html',
  styleUrls: ['./admin-user-management.component.css']
})
export class AdminUserManagementComponent implements OnInit {
  public userList: Array<AdminUserModel>;
  public userInfo: AdminUserModel;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserList().then(data => {
      console.log(data);
      this.userList = data;
    });
  }
  getUserDetail(userId: string): void {
    this.userService.getUserDetail(userId).then(data => {
      this.userInfo = data;
    });
  }
}
