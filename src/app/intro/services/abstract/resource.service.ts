import {FileDto} from '../../../../model/FileDto';
import {SafeResourceUrl} from '@angular/platform-browser';

export abstract class ResourceService {
  public abstract getFileList(): Promise<Array<FileDto>>;
  public abstract getFileForViewer(filename): Promise<ArrayBuffer>;
  public abstract getFile(filename): Promise<ArrayBuffer>;
}
