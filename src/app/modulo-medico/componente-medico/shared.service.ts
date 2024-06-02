// shared.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  /** 
    Este servicio se usa especificamente para poder
    cambiar el boolean del readonly del text-area de 
    un diagnostico. 
    Este cambia cuando un boton se acciona.
   */
  private readonlyStatusSubject = new Subject<boolean>();

  readonlyStatus$ = this.readonlyStatusSubject.asObservable();

  updateReadonlyStatus(status: boolean) {
    this.readonlyStatusSubject.next(status);
  }
}
