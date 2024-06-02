import { Component, OnInit } from '@angular/core';
import { HistorialesService } from '../../../../services/servicio-citas/servicio-historiales/historiales.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-componente-historial-paciente',
  templateUrl: './componente-historial-paciente.component.html',
  styleUrls: ['./componente-historial-paciente.component.css']
})
export class ComponenteHistorialPacienteComponent implements OnInit {
  ocultarPopUp: boolean = true;
  id_paciente: string = '';

  constructor(private route: ActivatedRoute, private historialesService: HistorialesService){}

  togglePopup() : void {
    this.ocultarPopUp = !this.ocultarPopUp;
  }

  dtOptions: DataTables.Settings = {};

  ngOnInit() {
    /**
      Para poder mostrar el historial del paciente, se usa una datatable.
      En esta datatable se comiunica con la API dado un pacientre para 
      poder mostrar su historial.
     */
    this.id_paciente = this.route.snapshot.paramMap.get('id_paciente') || '';
    this.dtOptions = {
      searching: false,
      info: false,
      scrollY: '330px',
      paging: false,
      ajax: (dataTablesParametres: any, callback: any) => {
        this.historialesService.mostrarHistorialMedico(parseInt(this.id_paciente))
        .subscribe(
          (data :any) => {
            callback({
              data:data
            });
          });
      },
      columns: [
        { title: 'Medico Asignado', data: 'nombre_completo_medico' },
        { title: 'Fecha realización', data: 'fecha' },
        { title: 'Hora realización', data: 'hora' },
        { title: 'Tipo de cita', data: 'tipo_cita' },
      ],
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json',
        emptyTable: 'El paciente no ha realizado ninguna cita...',
      },
    };
  }
}
