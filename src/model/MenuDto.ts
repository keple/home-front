export class MenuDto {
  constructor(displayName: string, path: string) {
    this.displayName = displayName;
    this.path = path;
  }
  private displayName: string;
  private path: string;

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
}

