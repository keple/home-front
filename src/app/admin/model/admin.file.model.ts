export interface AdminFileInf {
  displayName: string;
  providedAs: string;
  docName: string;
  filePath: string;
  filename: string;
  visible: boolean;
}
export class AdminFileModel {
   displayName: string;
   providedAs: string;
   docName: string;
   filePath: string;
   filename: string;
   isVisible: boolean;
  constructor(data: AdminFileInf) {
    this.displayName = data.displayName;
    this.providedAs = data.providedAs;
    this.docName = data.docName;
    this.filePath = data.filePath;
    this.filename = data.filename;
    this.isVisible = data.visible;
  }
  public getDisplayName() {
    return this.displayName;
  }
  public getDocName() {
    return this.docName;
  }
  public getProvidedType() {
    return this.providedAs;
  }
  public getFilePath() {
    return this.filePath;
  }
  public getFilename() {
    return this.filename;
  }
}
