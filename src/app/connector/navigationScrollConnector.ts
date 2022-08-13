import { Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class NavigationScrollConnector {
  private active: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  constructor() {
  }
  setActive(value: string) {
    this.active.next(value);
  }
  getActive(): Observable<string> {
    return this.active.asObservable();
  }
}
