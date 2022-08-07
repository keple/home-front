import {MenuDto} from '../../model/MenuDto';
import {ServiceDto} from '../../model/ServiceDto';

export  abstract class CommonService {
  public abstract getMenuList(): Promise<Array<MenuDto>>;
  public abstract getProjects(): Promise<Array<ServiceDto>>;
  public abstract publishApiKey(username: string, password: string, authType: string ): Promise<any>;
}
