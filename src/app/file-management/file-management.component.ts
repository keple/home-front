import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../services/abstract/CommonService';
@Component({
  selector: 'app-file-management',
  templateUrl: './file-management.component.html',
  styleUrls: ['./file-management.component.css']
})
export class FileManagementComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {

  }

}
