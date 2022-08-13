import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-file-dialog',
  templateUrl: './create-file-dialog.component.html',
  styleUrls: ['./create-file-dialog.component.css']
})
export class CreateFileDialogComponent implements OnInit {

  docName: string;
  constructor() { }

  ngOnInit(): void {
  }

}
