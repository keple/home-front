import {NgModule} from '@angular/core';
import {CreateFileDialogComponent} from './create-file-dialog/create-file-dialog.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {DeleteConfirmDialogComponent} from './delete-confirm-dialog/delete-confirm-dialog.component';

@NgModule({
  declarations: [
    CreateFileDialogComponent,
    DeleteConfirmDialogComponent
  ],
  imports : [
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    CreateFileDialogComponent,
    DeleteConfirmDialogComponent
  ]
})

export class AdminDialogModule{}
