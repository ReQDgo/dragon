import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: string = 'http://127.0.0.1:8000/api/usuarios';
  constructor(private http: HttpClient) { }

  obtenerPacientePorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/buscar/${id}`);
  }
}
