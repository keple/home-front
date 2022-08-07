import { Component, OnInit } from '@angular/core';
import {ResourceService} from '../../services/abstract/ResourceService';
import {FileDto} from '../../model/FileDto';
import {MatDialog} from '@angular/material/dialog';
import {ErrorResponseContentComponent} from '../error-response-content/error-response-content.component';

@Component({
  selector: 'app-file-view',
  templateUrl: './file-view.component.html',
  styleUrls: ['./file-view.component.css']
})
export class FileViewComponent implements OnInit {
  files: Array<FileDto>;
  constructor(private resourceService: ResourceService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.resourceService.getFileList().then((data) => {
      console.log(data);
      this.files = data;
    });
  }
}
