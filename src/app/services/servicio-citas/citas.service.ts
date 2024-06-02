import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CitasService {
  constructor(private http: HttpClient) {}

  // ENDPOINTS DEL PACIENTE:

  mostrarCitasDelPaciente(pacienteId: number): Observable<any> {
    return this.http.get(
      //`http://localhost:443/ivo_backend/public/api/citas/mostrarCitasDelPaciente/${pacienteId}`
      `http://localhost:8000/api/citas/mostrarCitasDelPaciente/${pacienteId}`
    );
  }

  mostrarDiagnosticoDelPaciente(idCita: string): Observable<any> {
    return this.http.get(
      //`http://localhost:443/ivo_backend/public/api/diagnosticos/mostrarDiagnosticoDelPaciente/${idCita}`
      `http://localhost:8000/api/diagnosticos/mostrarDiagnosticoDelPaciente/${idCita}`
    );
  }

  mostrarInformeDelPaciente(idCita: string): Observable<any> {
    return this.http.get(
      //`http://localhost:443/ivo_backend/public/api/informes/mostrarInformeDelPaciente/${idCita}`
      `http://localhost:8000/api/informes/mostrarInformeDelPaciente/${idCita}`
    );
  }

  cancelarCita(numCita: string): Observable<any> {
    let url = `http://localhost:8000/api/citas/cancelarCita/${numCita}`;

    return this.http.post(url, null); // Proporciona null como el cuerpo
  }

  // ENDPOINTS DEL RADIÓLOGO:

  comprobarNumeroDeCita(): Observable<any> {
    return this.http.get(
      //`http://localhost:443/ivo_backend/public/api/citas/comprobarNumCita`
      `http://localhost:8000/api/citas/comprobarNumCita`
    );
  }

  cumplirCita(numCita: number): Observable<any> {
    let url = `http://localhost:8000/api/citas/cumplirCita/${numCita}`;
    return this.http.post(url,null);
  }
  
  // ENDPOINTS DEL ADMINISTRATIVO:

  mostrarCitasDelDia(): Observable<any> {
    // Obtén el token almacenado en localStorage
    const token = localStorage.getItem('token_usuario');

    // Verifica si hay un token antes de hacer la solicitud
    if (token) {
      // Configura los encabezados con el token
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });

      // Realiza la solicitud HTTP incluyendo los encabezados
      return this.http.get(
        //'http://localhost:443/ivo_backend/public/api/citas/mostrarCitasDelDia',
        'http://localhost:8000/api/citas/mostrarCitasDelDia',
        { headers }
      );
    } else {
      // Manejar el caso en el que no haya token disponible
      console.error('Token no disponible.');
      // Puedes devolver un Observable con un error u otra lógica según tu necesidad.
      return new Observable();
    }
  }

  updateCita(idCita: string, datosActualizados: any): Observable<any> {
    // Cambia la URL según tu estructura de rutas
    const url = `http://localhost:8000/api/citas/actualizar/${idCita}`;

    return this.http.put(url, datosActualizados);
  }

  // ENDPOINTS DEL MEDICO:
  mostrarCitasMedico(id_medico: number): Observable<any> {
    return this.http.get(
      `http://localhost:8000/api/citas/mostrarCitasMedico/${id_medico}`
    );
  }

  crearCitaRadiologica(datosInsertados:any): Observable<any> {
    const url = `http://localhost:8000/api/citas/guardar`;
    return this.http.post(url, datosInsertados);
  }
}
