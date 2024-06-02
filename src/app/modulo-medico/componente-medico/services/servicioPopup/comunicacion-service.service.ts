import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {
  private cancelarCitaSubject = new Subject<void>();

  cancelarCita$ = this.cancelarCitaSubject.asObservable();

  emitirCancelarCita() {
    this.cancelarCitaSubject.next();
  }
}
