import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HistorialesService {
  constructor(private http: HttpClient) {}

  mostrarHistorialMedico(id_paciente: number): Observable<any> {
    return this.http.get(
      `https://ivo-back.online/api/historiales/${id_paciente}`
     );
  }
}
