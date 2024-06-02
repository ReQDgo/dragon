import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private http: HttpClient) {}

  // ENDPOINTS DEL ADMINISTRATIVO:

  buscarPorDni(): Observable<any> {
    return this.http.get(
     'http://localhost:8000/api/usuarios/buscarPorDni'
    );
  }

  mostrarRadiologos(): Observable<any> {
    return this.http.get(
      'http://localhost:8000/api/usuarios/mostrarRadiologos'
    );
  }

  crearUsuarioPaciente(datos: any): Observable<any> {
    // Ajusta la URL según tu configuración
    return this.http.post(
      'http://localhost:8000/api/usuarios/crearUsuarioPaciente', datos
    );
  }
}

