import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api';
  //private apiUrl = 'http://localhost:443/ivo_backend/public/api';
  //private apiUrl = 'http://127.0.0.1:8000/api';

  private usuarioNombreCompletoSubject = new BehaviorSubject<string>(''); // Una única variable para nombre completo
  private usuarioIdSubject = new BehaviorSubject<number | null>(null);

  constructor(private http: HttpClient) {
    this.inicializarUsuario(); // Llama al método de inicialización en el constructor
  }
  private inicializarUsuario(): void {
    // Intenta obtener el ID del usuario de localStorage al inicializar el servicio

    // Se declaran constantes ya que sus valores no deben ni van a cambiar durante la sesión del usuario.
    const storedUserId = localStorage.getItem('id');
    const storedUserName = localStorage.getItem('nombre'); // Almacenamos el nombre del usuario del localStorage
    const storedUserSurname = localStorage.getItem('primer_apellido'); // Almacenamos el apellido del usuario del localStorage

    if (storedUserId && storedUserName && storedUserSurname) {
      this.usuarioIdSubject.next(Number(storedUserId));
      const nombreCompleto = `${storedUserName} ${storedUserSurname}`;
      this.usuarioNombreCompletoSubject.next(nombreCompleto);
    }
  }

  iniciarSesion(credentials: {
    email: string;
    password: string;
  }): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/iniciarSesion`, credentials)
      .pipe(
        tap((response) => {
          if (!response.error) {
            localStorage.setItem('token_usuario', response.token);
            localStorage.setItem('id', response.user.id);
            localStorage.setItem('rol', response.user.id_rol);
            localStorage.setItem('nombre', response.user.nombre); // Almacena el nombre en localStorage
            localStorage.setItem('primer_apellido', response.user.primer_apellido);
        
            // Almacenamos el nombre y el apellido del usuario.
            const nombreCompleto = `${response.user.nombre} ${response.user.primer_apellido}`;

            // Actualizar el BehaviorSubject con el nuevo ID del usuario
            this.usuarioIdSubject.next(response.user.id);
            this.usuarioNombreCompletoSubject.next(nombreCompleto);
          }
        })
      );
  }

  obtenerUsuarioNombre(): Observable<string> {
    return this.usuarioNombreCompletoSubject.asObservable();
  }

  obtenerUsuarioId(): Observable<number | null> {
    return this.usuarioIdSubject.asObservable();
  }
}
