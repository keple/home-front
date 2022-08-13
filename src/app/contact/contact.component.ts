import {Component, ElementRef, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ContactService} from '../../services/abstract/ContactService';
import {MainFrameComponent} from "../mainFrame/mainFrame.component";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public title: string;
  public contents: string;
  public inShowArea = false;
  constructor(private snackBar: MatSnackBar,
              private contactService: ContactService,
              private elRef: ElementRef,
              private containerScrollRef: MainFrameComponent) { }

  ngOnInit(): void {
    this.containerScrollRef.scrollEvent.subscribe(scroll => {
      if (this.elRef.nativeElement.offsetTop <= (scroll.scrollTop + 400) && !this.inShowArea) {
        console.log('chage to true');
        this.inShowArea = true;
      }
    });
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
