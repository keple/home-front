import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonService} from '../../services/abstract/CommonService';
import {Router, Routes} from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {
  username: string;
  password: string;
  @Output() authenticationEvent  = new EventEmitter();
  constructor(private commonService: CommonService , private routes: Router, private dialogRef: MatDialogRef<UserAuthComponent>) { }

  ngOnInit(): void {
  }
  async publishKey(): Promise<void> {
    // auth server로 부터 발급받은 access token
    console.log(this.username , this.password , null);
    const accessToken = await this.commonService.publishApiKey(this.username , this.password , null);
    // set local storage
    await localStorage.setItem('token' , accessToken);
    this.dialogRef.close();
    this.authenticationEvent.emit({});
    // getMenuList를 다시호출함
  }
  closeMatdialogClose() {
    this.dialogRef.close();
  }
}
