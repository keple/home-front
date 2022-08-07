export class FileDto {
  private thumbNail: string;
  private filename: string;
  private fileType: string;
  constructor(fileType: string, filename: string, thumbNail: string) {
    this.fileType = fileType;
    this.filename = filename;
    this.thumbNail = thumbNail;
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
}
