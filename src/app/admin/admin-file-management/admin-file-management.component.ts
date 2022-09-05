import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {FileManagementService} from '../service/fileManagement.service';
import {AdminFileDto} from '../model/AdminFileDto';
import {MatDialog} from '@angular/material/dialog';
import {CreateFileDialogComponent} from '../dialogs/create-file-dialog/create-file-dialog.component';
import {DeleteConfirmDialogComponent} from '../dialogs/delete-confirm-dialog/delete-confirm-dialog.component';
import {ConfirmDialogComponent} from "../dialogs/confirm-dialog/confirm-dialog.component";
import {UpdateDocumentDialogComponent} from "../dialogs/update-document-dialog/update-document-dialog.component";

@Component({
  selector: 'app-admin-file-management',
  templateUrl: './admin-file-management.component.html',
  styleUrls: ['./admin-file-management.component.css'],
  animations: [
    trigger('turnaround' , [
      state('in', style({
        transform: 'rotate(0.25turn)'
      })),
      state('out', style({
        transform: 'rotate(0turn)'
      })),
      transition('in => out', [
        animate('0.25s')
      ]),
      transition('out => in' , [
        animate('0.25s')
      ])
    ])
  ]
})
export class AdminFileManagementComponent implements OnInit {
  mouseIn: boolean;
  fileList: Array<AdminFileDto>;
  constructor(private fileManagement: FileManagementService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.fileManagement.getManagedFileList().then((data) => {
      this.fileList = data;
    });
  }
  changeInState() {
    this.mouseIn = true;
  }
  changeOutState() {
    this.mouseIn = false;
  }
  addFileManageItem(): void {
    console.log('addItem!');
    this.dialog.open(CreateFileDialogComponent , {
      width: `500px`,
      height: `700px`
    });
  }
  updateDocument(id): void {
    // update confirm dialog
    const dialogRef = this.dialog.open(UpdateDocumentDialogComponent , {
      width: `400px`,
      height: `800px`,
      data: {documentId: id}
    });
  }
  deleteDocument(): void {
    // delete confirm dialog
    this.dialog.open(DeleteConfirmDialogComponent , {
      width: `500px`,
      height: `700px`
    });
  }
}
