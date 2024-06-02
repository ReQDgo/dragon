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
      `http://localhost:8000/api/historiales/${id_paciente}`
     );
  }
}
