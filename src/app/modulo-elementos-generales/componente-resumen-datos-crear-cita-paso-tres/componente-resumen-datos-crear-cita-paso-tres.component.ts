import { Component, Input, OnInit } from '@angular/core';
import { CitasService } from '../../services/servicio-citas/citas.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/servicio-auth/auth.service';

import { tap } from 'rxjs';

@Component({
  selector: 'app-componente-resumen-datos-crear-cita-paso-tres',
  templateUrl: './componente-resumen-datos-crear-cita-paso-tres.component.html',
  styleUrls: ['./componente-resumen-datos-crear-cita-paso-tres.component.css'],
})
export class ComponenteResumenDatosCrearCitaPasoTresComponent
  implements OnInit
{
  idAdministrativo: number | null = null; // Ajustado para manejar null como valor inicial

  id: number = 0;
  dni: string = '';
  fecha: string = '';
  hora: string = '';
  idRadiologo: number = 0;
  nombreRadiologo: string = '';
  especialidad: number = 2;
  tipoCita: string = 'Radiologia';
  estado: string = 'EN_CURSO';
  numCita: string = '';

  @Input() mostrarResumenDatosCrearCita: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private citas: CitasService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.obtenerUsuarioId().subscribe((id) => {
      if (id !== null) {
        // Asegura que id no sea null

        this.idAdministrativo = id;
        console.log('Usuario ID:', this.idAdministrativo);
      } else {
        console.log('Usuario no logeado o ID no disponible');
        // Manejo en caso de que no haya un usuario logeado
      }
    });

    const numRandom = Math.floor(10000 + Math.random() * 90000); // Creamos un num_cita random.
    const letraRandom = String.fromCharCode(
      65 + Math.floor(Math.random() * 26)
    );
    this.numCita = numRandom.toString() + letraRandom;

    this.route.queryParams.subscribe((params) => {
      this.dni = params['dni'];
      console.log('DNI DEL USUARIO: ' + this.dni);

      this.id = +params['id']; // Convertir a número
      console.log('ID DEL USUARIO: ' + this.id);

      this.fecha = params['fecha'];
      console.log('FECHA DEL USUARIO: ' + this.fecha);

      this.hora = decodeURIComponent(params['hora']);
      console.log('HORA DEL USUARIO: ' + this.hora);

      this.idRadiologo = +params['idRadiologo']; // Convertir a número
      console.log('ID DEL RADIOLOGO: ' + this.idRadiologo);

      this.nombreRadiologo = decodeURIComponent(params['nombreRadiologo']);
      console.log('NOMBRE DEL RADIOLOGO: ' + this.nombreRadiologo);
    });
  }
  continuarAconfirmacion() {
    const datosAGuardar = {
      num_cita: this.numCita,
      fecha: this.fecha,
      hora: this.hora,
      especialidad: this.especialidad,
      tipo_cita: this.tipoCita,
      id_paciente: this.id, // El ID del paciente.
      id_radiologo: this.idRadiologo,
       id_administrativo: this.idAdministrativo,
      estado: this.estado,
    };

    // Llamamos al servicio para crear la cita radiológica
    this.citas
      .crearCitaRadiologica(datosAGuardar)
      .pipe(
        tap(() => {
             this.router.navigate([
            'administrativo/crearCita/confirmacionCreacionCita',
          ]);
        })
      )
      .subscribe((data: any) => {});
  }
}
