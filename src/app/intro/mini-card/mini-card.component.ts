import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';
import {ResourceService} from '../services/abstract/resource.service';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.css'],
  animations: [
    trigger('hoverButton' , [
      state('in', style({transform: 'translateX(0)'})),
      state('out', style({transform: 'translateX(80%)'})),
      transition('in => out', animate('0.8s linear')),
      transition('out => in', animate('0s linear'))
    ])
  ]
})
export class MiniCardComponent implements OnInit, OnChanges {

  @Input() title: string;
  @Input() color: string;
  @Input() resourceName: string;
  @Input() backgroundResource: string;
  @Input() type: string;
  @Input() supportType: string;
  constructor( private resourceService: ResourceService) { }
  isHover: boolean;
  interval: number;
  state: string;
  ngOnInit(): void {
    this.state = 'in';
  }
  active(){
    this.state = 'out';
    this.isHover = true;
  }
  inActive() {
    this.state = 'in';
    this.isHover = false;
  }
  onEnd($event){
    if (this.isHover) {
      if ($event.toState === 'out') {
        this.state = 'in';
      }
      else {
        this.state = 'out';
      }
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
  }
  supportFn(): void  {
    // support -> download / open detail view
    if (this.supportType === 'download'){
      this.resourceService.getFile(this.resourceName).then(r => console.log(r));
    }else if (this.supportType === 'detail'){

    }
  }
}
