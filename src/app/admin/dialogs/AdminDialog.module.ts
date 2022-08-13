import {NgModule} from '@angular/core';
import {CreateFileDialogComponent} from './create-file-dialog/create-file-dialog.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    CreateFileDialogComponent,
  ],
  imports : [
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    CreateFileDialogComponent,
  ]
})

export class AdminDialogModule{}
