import {animate, animation, keyframes, state, style, transition, trigger, useAnimation} from '@angular/animations';

export const componentShowup  = animation([
    animate('1s ease' , keyframes([
      style({opacity : 0 , transform: `translateY(200px)`}),
      style({opacity : 0.5 , transform: `translateY(120px)`}),
      style({opacity : 1 , transform: `translateY(0px)`}),
    ]))
]);

export const shakeQuestionMark = animation ([
  animate('1s linear' , keyframes([
    style({transform: `translateX(-25px)`, transformOrigin : 'bottom'}),
    style({transform: `translateX(25px)` , transformOrigin : 'bottom'}),
    style({transform: `translateX(-25px)`, transformOrigin : 'bottom' })
  ]))
]);

export const blinkAnimation = animation([
  animate('1s linear' , keyframes([
    style({opacity : 1}),
    style({opacity : 0})
  ]))
] );
