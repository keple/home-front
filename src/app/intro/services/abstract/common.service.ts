import {MenuModel} from '../../../../model/menu.model';
import {ServiceModel} from '../../../../model/service.model';

export  abstract class CommonService {
  public abstract getMenuList(): Promise<Array<MenuModel>>;
  public abstract getProjects(): Promise<Array<ServiceModel>>;
  public abstract publishApiKey(username: string, password: string, authType: string ): Promise<any>;
  public abstract getSubMenuList(viewCategory: string): Promise<Array<MenuModel>>;

}
