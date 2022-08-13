import { Component, OnInit } from '@angular/core';
import {MainFrameComponent} from "../mainFrame/mainFrame.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  events: Array<any>;
  constructor(private mainFrameComponent: MainFrameComponent) { }

  ngOnInit(): void {
  }
  getScrollPositionWhenChildLoaded(): void {
    console.log('emitted');
    this.mainFrameComponent.getScrollPositionWhenChildLoaded();
  }
}
