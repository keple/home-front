import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CommonService} from '../../../services/abstract/CommonService';
import {MenuDto} from '../../../model/MenuDto';
import {ComponentMap} from '../../../resources/component.map';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  subMenuList: Array<MenuDto>;
  constructor(private router: Router, private commonService: CommonService, private componentMap: ComponentMap) { }

  ngOnInit(): void {
    // sub list 목록 불러와서 Router config 수정
    const routesConfig = [];
    this.commonService.getSubMenuList('Management').then((data) => {
      this.subMenuList = data;
      this.subMenuList.forEach((dt) => {
        routesConfig.push({path: `${dt.getPath()}` , component: this.componentMap.get(dt.getMenuId())});
      });
      const managementRouteConfig = this.router.config.filter((r) => r.path.includes('management'));
      managementRouteConfig[0].children = routesConfig;
      const newConfig = [
        ...this.router.config,
        ...routesConfig
      ];
      this.router.resetConfig(newConfig);

    });
  }

}
