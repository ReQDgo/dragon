import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImagenesService {
  constructor(private http: HttpClient) {}
  

  mostrarImagenesDelPaciente(idCita: string): Observable<any> {
    return this.http.get(
      `http://localhost:8000/api/imagenes/mostrarImagenesDelPaciente/${idCita}`
    );
  }

  guardar(datos: any): Observable<any> { // Guardar imágenes radiológicas
   return this.http.post('http://localhost:8000/api/imagenes/guardar', datos);
  }
}
