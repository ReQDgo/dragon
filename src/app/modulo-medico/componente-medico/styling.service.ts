import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StylingService {
  /**
    Este servicio se usa para poder cambiar los estilos de un componente,
    cuando otra componente active un evento, por ejemplo.
   */
  sharedStyleSource = new ReplaySubject(1);
  public sharedStyle$ = this.sharedStyleSource.asObservable();
  constructor() {}
  newStyle(value: any) {
    this.sharedStyleSource.next(value);
  }
}
