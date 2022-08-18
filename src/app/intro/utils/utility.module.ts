import {NgModule} from '@angular/core';
import {Typing} from './typing.util';
import {TYPING_CONFIG} from './typing.config';

@NgModule({
  declarations : [
  ],
  providers : [
    Typing,
    {
      provide: TYPING_CONFIG,
      useValue : ['WebDeveloper']
    }
  ],
})

export class UtilityModule {}
