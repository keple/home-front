import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {UpdateDocumentModel} from "../../model/update.document.model";
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";
import {FileManagementService} from "../../service/file-management.service";
import {AdminFileModel} from "../../model/admin.file.model";
import {Form, FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-update-document-dialog',
  templateUrl: './update-document-dialog.component.html',
  styleUrls: ['./update-document-dialog.component.css']
})
export class UpdateDocumentDialogComponent implements OnInit {

  public documentInfo: AdminFileModel ;
  public formGroup: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<UpdateDocumentDialogComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) private sharedData: UpdateDocumentModel,
    private fileManagementService: FileManagementService,
    private formBuilder: FormBuilder
  ) {
    this.formGroup = new FormGroup({
      displayName: new FormControl<string>(''),
      providedAs : new FormControl<string>('file'),
      isVisible : new FormControl<boolean>(false),
      file : new FormControl<any>('')
    });
  }

  ngOnInit(): void {
    this.fileManagementService.getDocumentInfo(this.sharedData.documentId).then((data) => {
      console.log('admin detail data' , data);
      this.documentInfo = data;
      this.formGroup.setValue({
        displayName : this.documentInfo.displayName,
        providedAs: this.documentInfo.providedAs,
        isVisible: this.documentInfo.isVisible,
        file: ''
      });
    });
  }
  updateDocument() {
    console.log(this.formGroup.value);
    // this.fileManagementService.updateDocumentInfo(this.sharedData.documentId)
    // this.dialog.open(ConfirmDialogComponent , {
    //   width: `400px`,
    //   height: `200px`
    // });
  }
  cancel() {
    this.dialogRef.close();
  }
}
