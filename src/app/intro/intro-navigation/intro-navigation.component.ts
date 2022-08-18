import { Component, OnInit } from '@angular/core';
import {AboutComponent} from '../about/about.component';
import {CareerComponent} from '../career/career.component';
import {FileViewComponent} from '../file-view/file-view.component';
import {ProjectHealthCheckComponent} from '../project-health-check/project-health-check.component';
import {ContactComponent} from '../contact/contact.component';
import {NavigationScrollConnector} from '../../connector/navigationScrollConnector';

@Component({
  selector: 'app-intro-navigation',
  templateUrl: './intro-navigation.component.html',
  styleUrls: ['./intro-navigation.component.css']
})
export class IntroNavigationComponent implements OnInit {
  currentPosition: string;
  constructor(private navigationConnector: NavigationScrollConnector) { }

  ngOnInit(): void {
   this.navigationConnector.getActive().subscribe(active => {
     console.log('observe' , active);
     this.currentPosition = active;
   });
  }

}
