// shared.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private readonlyStatusSubject = new Subject<boolean>();

  readonlyStatus$ = this.readonlyStatusSubject.asObservable();

  updateReadonlyStatus(status: boolean) {
    this.readonlyStatusSubject.next(status);
  }
}
