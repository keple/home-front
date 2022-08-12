export class FileDto {
  private thumbNail: string;
  private filename: string;
  private fileType: string;
  private displayName: string;
  constructor(data) {
    this.fileType = data.documentType;
    this.filename = data.filename;
    this.displayName = data.displayName;
    this.thumbNail = data.thumbNail;
  }
  getThumbNail(): string {
    return this.thumbNail;
  }
  getFileType(): string {
    return this.fileType;
  }
  getFilename(): string {
    return this.filename;
  }
  getDisplayName(): string {
    return this.displayName;
  }
}
