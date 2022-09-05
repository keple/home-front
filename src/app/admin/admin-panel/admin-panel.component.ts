import { Component, OnInit } from '@angular/core';
import {Navigation, NavigationEnd, Router} from '@angular/router';
import {CommonService} from '../../intro/services/abstract/common.service';
import {MenuModel} from '../../../model/menu.model';
import {ComponentMap} from '../../../resources/component.map';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  subMenuList: Array<MenuModel>;
  constructor(private router: Router, private commonService: CommonService, private componentMap: ComponentMap) { }

  ngOnInit(): void {
    this.commonService.getSubMenuList('Management').then((data) => {
      this.subMenuList = data;
    });
  }
  isCurrentRoute(path): boolean {
    const currentNavigation = this.router.getCurrentNavigation();
    // console.log('cur nav difference', currentNavigation, path);
    if (this.router.url.includes(path)) {
      return true;
    }
    return false;
  }
}
