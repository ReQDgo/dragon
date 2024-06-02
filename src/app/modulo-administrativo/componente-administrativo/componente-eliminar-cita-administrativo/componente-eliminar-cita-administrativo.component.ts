import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Importa ActivatedRoute aquí
import { CitasService } from '../../../services/servicio-citas/citas.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-componente-eliminar-cita-administrativo',
  templateUrl: './componente-eliminar-cita-administrativo.component.html',
  styleUrls: ['./componente-eliminar-cita-administrativo.component.css'],
})
export class ComponenteEliminarCitaAdministrativoComponent {
  nombrePaciente: string = '';
  numCita: string = '';

  constructor(
    private citasService: CitasService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Obtener el valor de los parámetros de la URL
    this.route.queryParams.subscribe((params) => {
      this.nombrePaciente = params['nombrePaciente'] || '';
      this.numCita = params['numCita'] || '';
    });
  }

  cancelarCita() {
    this.citasService
      .cancelarCita(this.numCita)
      .pipe(
        tap(() => {
          this.router.navigate([
            'administrativo/eliminarCita/confirmacionEliminarCita',
          ]);
        })
      )
      .subscribe((data: any) => {
        // Cancelamos la cita.
      });
  }
}
