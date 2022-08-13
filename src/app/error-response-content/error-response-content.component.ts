import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-error-response-content',
  templateUrl: './error-response-content.component.html',
  styleUrls: ['./error-response-content.component.css']
})
export class ErrorResponseContentComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ErrorResponseContentComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {statusCode: number, message: string}) {
    if (data.statusCode === 401){
      // localStorage에서 토큰항목 제거
      localStorage.removeItem('token');
    }
  }
  ngOnInit(): void {
  }
  closeDialog(): void {
    this.dialogRef.close();
  }
}
