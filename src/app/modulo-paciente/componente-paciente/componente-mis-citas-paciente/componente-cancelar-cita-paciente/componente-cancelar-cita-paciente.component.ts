import { Component } from '@angular/core';
import { CitasService } from '../../../../services/servicio-citas/citas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-componente-cancelar-cita-paciente',
  templateUrl: './componente-cancelar-cita-paciente.component.html',
  styleUrls: ['./componente-cancelar-cita-paciente.component.css'],
})
export class ComponenteCancelarCitaPacienteComponent {
  numCita: string = '';

  constructor(
    private citasService: CitasService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.numCita = params['numCita'] || ''; // Almacenamos en la variable numCita el número de la cita pasado por la URL.
    });
  }

  cancelarCita() { // Llamamos al servicio de citas para conectar con el endpoint 'cancelarCita'.
    this.citasService.cancelarCita(this.numCita)
      .subscribe((data: any) => {
        // Cancelamos la cita.
      });
  }
}
