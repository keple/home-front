import {FileModel} from '../../../../model/file.model';
import {SafeResourceUrl} from '@angular/platform-browser';

export abstract class ResourceService {
  public abstract getFileList(): Promise<Array<FileModel>>;
  public abstract getFileForViewer(filename): Promise<ArrayBuffer>;
  public abstract getFile(filename): Promise<ArrayBuffer>;
}
