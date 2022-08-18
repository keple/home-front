import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../services/abstract/common.service';
import {MenuDto} from '../../model/MenuDto';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  menuList: Array<MenuDto>;
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.getMenuList().then((data) => {
      console.log(data);
      this.menuList = data;
    });
  }

}
