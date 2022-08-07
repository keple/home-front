import {Component, OnInit, SecurityContext} from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';
import {ResourceService} from '../../services/abstract/ResourceService';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css'],
  animations : [
    trigger('slideTimeLine' , [
      state('show' , style({
        display: 'block'
      })),
      state('disable' , style({
        display: 'none'
      })),
      transition('disable=>show',
        animate('1.2s ease' , keyframes([
          style({display: 'block', opacity: 0 , transform: `translateX(-100px)`}),
          style({opacity: .3 , transform: `translateX(-50px)`}),
          style({opacity: 1 , transform: `translateX(0px)`}),
        ]))
      ),
    ])
  ]
})
export class CareerComponent implements OnInit {
  private pageNum: number;
  public pageSrcBlob: Array<SafeResourceUrl>;
  constructor(private resourceService: ResourceService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.pageNum = 1;
    this.pageSrcBlob = [];
    this.resourceService.getFileForViewer('nextlab').then((data) => {
      this.pageSrcBlob[0] = URL.createObjectURL(new Blob([data] , { type: 'text/plain' }));
    });
    this.resourceService.getFileForViewer('gridwiz').then((data) => {
      this.pageSrcBlob[1] = URL.createObjectURL(new Blob([data] , { type: 'text/plain' }));
    });
  }
  showPageNum(pageNum, careerType): void {
      this.pageNum = pageNum;

  }
  getCurrentPageNum(): number {
    return this.pageNum;
  }
}
