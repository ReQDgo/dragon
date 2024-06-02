import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StylingService {
  sharedStyleSource = new ReplaySubject(1);
  public sharedStyle$ = this.sharedStyleSource.asObservable();
  constructor() {}
  newStyle(value: any) {
    this.sharedStyleSource.next(value);
  }
}
