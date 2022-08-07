import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './mainFrame.component.html',
  styleUrls: ['./mainFrame.component.css']
})
export class MainFrameComponent implements OnInit {
  hasBackdrop: boolean;
  over: string
  constructor() { }

  ngOnInit(): void {
    this.hasBackdrop = true;
    this.over = 'over';
  }

}
