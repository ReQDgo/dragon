import { Component, OnInit } from '@angular/core';
import { CitasService } from '../../../services/servicio-citas/citas.service';
@Component({
  selector: 'app-componente-citas-administrativo',
  templateUrl: './componente-citas-administrativo.component.html',
  styleUrls: ['./componente-citas-administrativo.component.css'],
})
export class ComponenteCitasAdministrativoComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dataTable: any;

  constructor(private citasService: CitasService) {}

  ngOnInit() {
    this.initDataTable();
  }
  initDataTable() {
    this.dtOptions = {
      scrollY: '410px',
      info: false,
      ajax: (dataTablesParameters: any, callback: any) => {
        this.citasService.mostrarCitasDelDia().subscribe((data: any) => {
          callback({
            data: data,
          });
        });
      },

      columns: [
        { title: 'Nº de cita', data: 'num_cita' },
        { title: 'Nombre del paciente', data: 'nombre_completo_paciente' },
        { title: 'Nombre del médico', data: 'nombre_completo_radiologo' },
        { title: 'Tipo de cita', data: 'tipo_cita' },
        { title: 'Fecha', data: 'fecha' },
        { title: 'Hora', data: 'hora' },

        {
          title: '',
          data: 'null',
          orderable: false,
          render: function (data: any, type: any, full: any) {
            // AQUI SE GUARDA EL ID Y EL TITLE
            var idCita = full.id;
            var idPaciente = full.id_paciente;
            var numCita = full.num_cita;
            var nombrePaciente = full.nombre_completo_paciente;
         

            // DIV PARA LOS ICONOS
            return (
              '<div class="d-flex flex-row justify-content-center">' +
              `<a href="http://localhost:4200/administrativo/modificarCita?idCita=${idCita}&idPaciente=${idPaciente}&nombrePaciente=${nombrePaciente}"><img class="custom-imagen-1" src="../../../../../assets/images/ImagenesAdministrativo/editar.svg" alt=""></a>` +
              `<a href="http://localhost:4200/administrativo/eliminarCita?numCita=${numCita}&nombrePaciente=${nombrePaciente}"><img class="custom-imagen-2" src="../../../../../assets/images/ImagenesAdministrativo/papelera.svg" alt=""></a>`
            );
          },
        },
      ],

      order: [[3, 'desc']], // Ordenar las fechas por las más recientes.
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json',
      },
    };
  }
}
