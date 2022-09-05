export interface AdminFileInf {
  displayName: string;
  providedType: string;
  docName: string;
  filePath: string;
  filename: string;
}
export class AdminFileDto {
  private displayName: string;
  private providedType: string;
  private docName: string;
  private filePath: string;
  private filename: string;
  constructor(data: AdminFileInf) {
    this.displayName = data.displayName;
    this.providedType = data.providedType;
    this.docName = data.docName;
    this.filePath = data.filePath;
    this.filename = data.filename;
  }
  public getDisplayName() {
    return this.displayName;
  }
  public getDocName() {
    return this.docName;
  }
  public getProvidedType() {
    return this.providedType;
  }
  public getFilePath() {
    return this.filePath;
  }
  public getFilename() {
    return this.filename;
  }
}
