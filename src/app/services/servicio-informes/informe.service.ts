import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InformeService {

  constructor(private http: HttpClient) { }

  guardar(datos: any): Observable<any> { // Guardar informes
    return this.http.post('https://ivo-back.online/api/informes/guardar', datos);
  }
}
