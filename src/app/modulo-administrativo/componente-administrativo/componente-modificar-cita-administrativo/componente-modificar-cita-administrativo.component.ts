import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Importa el servicio Router
import { UsuariosService } from '../../../services/servicio-usuarios/usuarios.service';

@Component({
  selector: 'app-componente-modificar-cita-administrativo',
  templateUrl: './componente-modificar-cita-administrativo.component.html',
  styleUrls: ['./componente-modificar-cita-administrativo.component.css'],
})
export class ComponenteModificarCitaAdministrativoComponent {
  formulario: FormGroup;
  radiologos: any[] = [];

  idCita: number = 0;
  nombrePaciente: string = '';
  fecha: string = '';
  hora: string = '';
  idRadiologo: number = 0;

  constructor(
    private router: Router,
    private usuariosService: UsuariosService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.formulario = this.formBuilder.group({ // Validamos que se introducen los datos en el formato deseado.
      // Guardamos la fecha, hora y el id del radiologo seleccionado.
      fecha: [
        '',
        [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)],
      ],
      hora: [
        '',
        [
          Validators.required,
          Validators.pattern(/^([01]\d|2[0-3]):([0-5]\d)$/),
        ],
      ],

      radiologos: ['', Validators.required],
    });
  }
  guardarFechaYHora() {
    this.fecha = this.formulario.value.fecha;
    this.hora = this.formulario.value.hora;
    this.idRadiologo = this.formulario.value.radiologos;
  }
  modificarCita() {
    this.guardarFechaYHora();

    this.router.navigate(['administrativo/modificarCita/modificarCitaPaso2'], {
      queryParams: {
        idCita: encodeURIComponent(this.idCita),
        nombrePaciente: encodeURIComponent(this.nombrePaciente),
        fecha: encodeURIComponent(this.fecha),
        hora: encodeURIComponent(this.hora),
        idRadiologo: encodeURIComponent(this.idRadiologo),
      },
    });
  }

  ngOnInit() {
    // Pasamos a la siguiente ruta el id de la cita y el nombre del paciente.
    this.obtenerRadiologos();
    this.route.queryParams.subscribe((params) => {
      this.idCita = params['idCita'] || '';
      this.nombrePaciente = params['nombrePaciente'] || '';
    });
  }

  obtenerRadiologos() {
    this.usuariosService.mostrarRadiologos().subscribe((response) => {
      this.radiologos = response.usuarios;
    });
  }
}
