import { Component, OnInit } from '@angular/core';
import {CommonService} from '../intro/services/abstract/common.service';
import {MenuModel} from '../../model/menu.model';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  menuList: Array<MenuModel>;
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.getMenuList().then((data) => {
      console.log(data);
      this.menuList = data;
    });
  }

}
