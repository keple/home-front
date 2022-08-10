import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ContactService} from '../../services/abstract/ContactService';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public title: string;
  public contents: string;
  constructor(private snackBar: MatSnackBar, private contactService: ContactService) { }

  ngOnInit(): void {
  }

  submit(): void {
    console.log('submit message' , this.title , this.contents);
    this.contactService.sendMail(this.title, this.contents);
  }
  enterRoom(roomId): void {
    this.snackBar.open(`${roomId}` , 'close', {duration: 2500});
    // chat server에 연결
  }
}
