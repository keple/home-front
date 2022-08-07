import {NgModule} from '@angular/core';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';

@NgModule({
  imports : [
    MatDialogModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS , useValue: {hasBackdrop: true}}
  ],
})


export class DialogModule {}
