import { Component, Input, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/servicio-usuarios/usuarios.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-componente-resumen-datos-paciente',
  templateUrl: './componente-resumen-datos-paciente.component.html',
  styleUrls: ['./componente-resumen-datos-paciente.component.css'],
})
export class ComponenteResumenDatosPacienteComponent {
  nombre: string = '';
  primer_apellido: string = '';
  segundo_apellido: string = '';
  fechaNacimiento: string = '';
  telefono: number = 0;
  email: string = '';
  password: string = '';
  dniPaciente: string = '';
  sexo: string = '';
  provincia: string = '';
  cp: number = 0;
  numero: number = 0;
  puerta: number = 0;
  poblacion: string = '';
  direccion: string = '';
  piso: number = 0;
  escalera: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usuariosService: UsuariosService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.nombre = params['nombre'];
      this.primer_apellido = params['primer_apellido'];
      this.segundo_apellido = params['segundo_apellido'];
      this.fechaNacimiento = params['fechaNacimiento'];
      this.telefono = params['telefono'];
      this.email = decodeURIComponent(params['email']);
      this.password = params['password'];
      this.dniPaciente = params['dni'];
      this.sexo = params['sexo'];
      this.provincia = decodeURIComponent(params['provincia']);
      this.cp = params['cp'];
      this.numero = params['numero'];
      this.puerta = params['puerta'];
      this.poblacion = decodeURIComponent(params['poblacion']);
      this.direccion = decodeURIComponent(params['direccion']);
      this.piso = params['piso'];
      this.escalera = params['escalera'];
    });
  }

  @Input() mostrarResumenDatosCrearPaciente: boolean = false;

  @Input() tipoCita: string = '';
  @Input() medicoCita = '';
  //Serán de tipo Date:
  @Input() fechaCita: string = '';
  @Input() horaCita: string = '';

  confirmacionCrearPaciente() {
    this.usuariosService
      .crearUsuarioPaciente({
        nombre: this.nombre,
        primer_apellido: this.primer_apellido,
        segundo_apellido: this.segundo_apellido,
        dni: this.dniPaciente,
        fecha_nacimiento: this.fechaNacimiento,
        email: this.email,
        password: this.password,
        telefono: this.telefono,
        sexo: this.sexo,
        provincia: this.provincia,
        poblacion: this.poblacion,
        cp: this.cp,
        direccion: this.direccion,
        numero: this.numero,
        piso: this.piso,
        puerta: this.puerta,
        escalera: this.escalera,
      })
      .pipe(
        tap(() => {
          this.router.navigate([
            'administrativo/crearPaciente/confirmacionCreacionPaciente',
          ]);
        })
      )
      .subscribe((data: any) => {});
  }
}
