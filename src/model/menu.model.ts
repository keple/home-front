export class MenuModel {
  private displayName: string;
  private path: string;
  private menuId: string;
  constructor(menuId: string, displayName: string, path: string) {
    this.menuId = menuId;
    this.displayName = displayName;
    this.path = path;
  }


  public setDisplayName(displayName: string): void{
    this.displayName = displayName;
  }
  public getDisplayName(): string{
    return this.displayName;
  }
  public setPath(path: string): void{
    this.path = path;
  }
  public getPath(): string{
    return this.path;
  }
  public setMenuId(menuId: string): void {
    this.menuId = menuId;
  }
  public getMenuId(): string {
    return this.menuId;
  }
}

