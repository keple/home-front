import { Component, OnInit } from '@angular/core';
import {FileManagementService} from '../../service/fileManagement.service';

@Component({
  selector: 'app-create-file-dialog',
  templateUrl: './create-file-dialog.component.html',
  styleUrls: ['./create-file-dialog.component.css']
})
export class CreateFileDialogComponent implements OnInit {
  docName: string;
  displayName: string;
  constructor(private fileManagementService: FileManagementService) { }

  ngOnInit(): void {
  }
  submitData(): void {
  }

}
