import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './mainFrame.component.html',
  styleUrls: ['./mainFrame.component.css']
})
export class MainFrameComponent implements OnInit {
  @Output() scrollEvent  = new EventEmitter();
  hasBackdrop: boolean;
  toggleOption = {
  over: 'over',
  push: 'push',
  side: 'side'
};
  ngOnInit(): void {
    this.hasBackdrop = false;
    // 페이지 로드이후 scroll event를 한번 발생시킨다.
  }
  containerScrollEvent($event) {
    this.scrollEvent.emit({scrollTop : $event.srcElement.scrollTop});
  }
  getScrollPositionWhenChildLoaded() {
    this.scrollEvent.emit({scrollTop : 0});
  }
}
