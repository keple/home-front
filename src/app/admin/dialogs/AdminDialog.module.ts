import {NgModule} from '@angular/core';
import {CreateFileDialogComponent} from './create-file-dialog/create-file-dialog.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DeleteConfirmDialogComponent} from './delete-confirm-dialog/delete-confirm-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import {MatButtonModule} from "@angular/material/button";
import { UpdateDocumentDialogComponent } from './update-document-dialog/update-document-dialog.component';
import {MatRadioModule} from "@angular/material/radio";
import { FileUploadComponent } from './file-upload/file-upload.component';

@NgModule({
  declarations: [
    CreateFileDialogComponent,
    DeleteConfirmDialogComponent,
    ConfirmDialogComponent,
    UpdateDocumentDialogComponent,
    FileUploadComponent
  ],
  imports: [
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatRadioModule,
    ReactiveFormsModule
  ],
  exports: [
    CreateFileDialogComponent,
    DeleteConfirmDialogComponent
  ]
})

export class AdminDialogModule{}
