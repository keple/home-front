import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './mainFrame.component.html',
  styleUrls: ['./mainFrame.component.css']
})
export class MainFrameComponent implements OnInit {
  hasBackdrop: boolean;
  toggleOption = {
  over: 'over',
  push: 'push',
  side: 'side'
};
  ngOnInit(): void {
    this.hasBackdrop = false;
  }

}
