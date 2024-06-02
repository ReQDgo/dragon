import { Component } from '@angular/core';
import { AuthService } from '../services/servicio-auth/auth.service';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-componente-login',
  templateUrl: './componente-login.component.html',
  styleUrls: ['./componente-login.component.css']
})
export class ComponenteLoginComponent {
  formularioInicioSesion!: FormGroup;


  constructor(private router: Router, private auth: AuthService) {
    this.formularioInicioSesion = new FormGroup({ // Almacenamos el email y contraseña que el usuario ha introducido en el formulario de login.
      email: new FormControl(),
      password: new FormControl()
    })
  }

  async onSubmit() {
    console.log("Datos de correo " + this.formularioInicioSesion.controls["email"].value);
  
    this.auth.iniciarSesion(this.formularioInicioSesion.value)
      .subscribe(response => { // Nos suscribimos al servicio de iniciar sesión y, si los datos son correctos, nos devuelve el id, rol y token del usuario logeado.
        if (!response.error) {
          localStorage.setItem('token_usuario', response.token);
          localStorage.setItem('id', response.user.id);
          localStorage.setItem('rol', response.user.id_rol);

          const usuarioId = response.user.id; // Constante ya que su valor no cambiará.
          console.log('ID del usuario:', usuarioId);
  
          switch (Number(localStorage.getItem("rol"))) { // Dependiendo del rol del usuario, podrá acceder a unas rutas u otras.
            case 4:
              this.router.navigateByUrl('/paciente');
              break;
            case 3:
              this.router.navigateByUrl('/medico');
              break;
            case 1:
              this.router.navigateByUrl('/radiologo');
              break;
            case 2:
              this.router.navigateByUrl('/administrativo');
              break;
          }
        } 
      });
  }
  
  

  contrasenaUsuario: string = '';
  contrasenaVisible: boolean = false;
  rutaIcono: string = '../../assets/images/ImagenesGenerales/iconoOjoCerradoLogin.svg';

  ngOnInit() {}

  cambiarVisibilidadIcono() {
    this.contrasenaVisible = !this.contrasenaVisible;  // Si la contraseña era invisible, ahora es visible (y viceversa).
    this.rutaIcono = this.contrasenaVisible
      ? '../../assets/images/ImagenesGenerales/iconoOjoAbiertoLogin.svg'
      : '../../assets/images/ImagenesGenerales/iconoOjoCerradoLogin.svg';
  }

}