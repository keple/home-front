import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-admin-file-management',
  templateUrl: './admin-file-management.component.html',
  styleUrls: ['./admin-file-management.component.css'],
  animations: [
    trigger('turnaround' , [
      state('in', style({
        transform: 'rotate(0.25turn)'
      })),
      state('out', style({
        transform: 'rotate(0turn)'
      })),
      transition('in => out', [
        animate('0.25s')
      ]),
      transition('out => in' , [
        animate('0.25s')
      ])
    ])
  ]
})
export class AdminFileManagementComponent implements OnInit {
  mouseIn: boolean;

  constructor() { }

  ngOnInit(): void {
  }
  changeInState() {
    this.mouseIn = true;
  }
  changeOutState() {
    this.mouseIn = false;
  }
  addFileManageItem(): void {
    console.log('addItem!');
  }
}
