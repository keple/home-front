import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {TYPING_CONFIG} from './typing.config';

@Injectable()
export class Typing {
  displayText: BehaviorSubject<string> = new BehaviorSubject<string>('');
  targetText: string;
  constructor(@Inject(TYPING_CONFIG)private typingConfig: string[]){
    this.targetText = typingConfig[0];
  }
  setText(text: string) {
    this.displayText.next(text);
  }
  getTargetText() {
    return this.targetText;
  }
  getDisplayText() {
    return this.displayText.asObservable();
  }
}
