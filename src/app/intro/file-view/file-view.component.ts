import {Component, ElementRef, OnInit, Output, EventEmitter} from '@angular/core';
import {ResourceService} from '../services/abstract/resource.service';
import {FileDto} from '../../../model/FileDto';
import {MatDialog} from '@angular/material/dialog';
import {state, style, transition, trigger, useAnimation} from '@angular/animations';
import {componentShowup} from '../../animation/ComponentShowAnimation';
import {MainFrameComponent} from '../../mainFrame/mainFrame.component';
import {NavigationScrollConnector} from '../../connector/navigationScrollConnector';

@Component({
  selector: 'app-file-view',
  templateUrl: './file-view.component.html',
  styleUrls: ['./file-view.component.css'],
  animations: [
    trigger('inShowArea' , [
      state('show' , style({opacity : 1})),
      state('none' , style({opacity : 0})),
      transition('none=>show',
        useAnimation(componentShowup , {})
      )
    ])
  ]
})
export class FileViewComponent implements OnInit {
  files: Array<FileDto>;
  inShowArea = false;
  constructor(private resourceService: ResourceService,
              private dialog: MatDialog,
              private elRef: ElementRef,
              private containerScrollRef: MainFrameComponent,
              private navigationConnector: NavigationScrollConnector) { }

  ngOnInit(): void {
    this.resourceService.getFileList().then((data) => {
      console.log(data);
      this.files = data;
    });
    this.containerScrollRef.scrollEvent.subscribe(scroll => {
      if (this.elRef.nativeElement.offsetTop <= (scroll.scrollTop + 700) && !this.inShowArea) {
        this.inShowArea = true;
      }
      if  (this.elRef.nativeElement.offsetTop <= scroll.scrollTop &&
        (this.elRef.nativeElement.offsetTop + this.elRef.nativeElement.getBoundingClientRect().height) >= scroll.scrollTop){
        this.navigationConnector.setActive('fileview');
      }
    });
  }
}
