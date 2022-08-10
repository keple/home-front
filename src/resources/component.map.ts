import { Injectable } from '@angular/core';
import {AdminPanelComponent} from '../app/admin/admin-panel/admin-panel.component';
import {AdminFileManagementComponent} from '../app/admin/admin-file-management/admin-file-management.component';
import {AdminPortfolioManagementComponent} from '../app/admin/admin-portfolio-management/admin-portfolio-management.component';
import {AdminUserManagementComponent} from '../app/admin/admin-user-management/admin-user-management.component';

@Injectable()
export class ComponentMap{
  private routeConfig: object;
  constructor() {
    this.routeConfig = {
      Management : AdminPanelComponent,
      Filemanage : AdminFileManagementComponent,
      ProjectManage : AdminPortfolioManagementComponent,
      UserManage : AdminUserManagementComponent
    };
  }
  get(resourceName) {
    return this.routeConfig[resourceName];
  }
}
