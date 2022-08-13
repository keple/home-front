import {animate, animation, keyframes, state, style, transition, trigger, useAnimation} from '@angular/animations';

export const componentShowup  = animation([
    animate('1s ease' , keyframes([
      style({opacity : 0 , transform: `translateY(200px)`}),
      style({opacity : 0.5 , transform: `translateY(120px)`}),
      style({opacity : 1 , transform: `translateY(0px)`}),
    ]))
]);

export const componentShowupByScroll = trigger('inShowArea' , [
  state('show' , style({opacity : 1})),
  state('none' , style({opacity : 0})),
  transition('none=>show',
    useAnimation(componentShowup , {})
  )
]);
