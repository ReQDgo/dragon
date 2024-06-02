import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CitasService } from 'src/app/services/servicio-citas/citas.service';

@Component({
  selector: 'app-componente-tabla-pacientes-medico',
  templateUrl: './componente-tabla-pacientes-medico.component.html',
  styleUrls: ['./componente-tabla-pacientes-medico.component.css'],
})
export class ComponenteTablaPacientesMedicoComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  mostrarPopUp: boolean = false;
  num_cita_enviar: string = '';

  constructor(
    private citasService: CitasService,
  ) {}

  ngOnInit() {
    const storedUserId = localStorage.getItem('id') || '';
    /**
      Para poder mostrar las citas de los pacientes que un medico
      tiene hoy, se hace uso de una datatable. 
      Con esta datatable conectamos con los endpoints del back para poder 
      usar sus metodos. 
      En este caso se usa el mostrarCitasMedico, dado el id del medico.
     */
    this.dtOptions = {
      info: false,
      scrollX: true,
      scrollY: '420px',
      ajax: (dataTablesParametres: any, callback: any) => {
        this.citasService.mostrarCitasMedico(parseInt(storedUserId)).subscribe((data: any) => {
          callback({
            data: data,
          });
        });
      },
      columns: [
        /**
          Se ajusta lo que se quiere mostrar y como se quiere mostrar.
         */
        { title: 'Número Cita', data: 'num_cita' },
        { title: 'Nombre del paciente', data: 'nombre_completo_paciente' },
        { title: 'DNI', data: 'dni' },
        { title: 'Hora', data: 'hora' },
        {
          title: '',
          data: null,
          orderable: false,
          render: function (data: any, type: any, full: any) {
            /**
             * En este ultimo, se aprovecha el render que se ha usado para
              mostrar dos a-link, para asi almacenar variables necesarias
              para usarlos en otros lugares del programa.
             */
            let num_cita = full.num_cita;
            let nombrePaciente = full.nombre_completo_paciente;
            let fecha = full.fecha;
            let idCita = full.id;
            let hora = full.hora;
            let dni = full.dni;
            let id_paciente = full.id_paciente;
            return (
              '<div class="d-flex justify-content-evenly">' +
              '<a class="abrirCita" href="http://localhost:4200/medico/citas/' +
              dni +
              '/' +
              fecha +
              '/' +
              hora +
              '/' +
              nombrePaciente +
              '/' +
              id_paciente +
              '/?id=' +
              num_cita +
              '">' +
              '<img src="../../../../../assets/images/ImagenesMedico/abrirCitaMedico.svg" alt=""></a>' +
              '<button class="cancelarCita" id="cancelarCita-' +
              num_cita +
              '"><img src="../../../../../assets/images/ImagenesMedico/cruz_cancelar_medico.svg" alt=""></button>'
            );
          },
        },
      ],
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json',
      },
    };

    /**
      Le da un evento de click a los iconos cancelar.
      Al realizar el evento, se coge el num_cita necesario
      para poder realizar la accion de cancelar una cita.

      Se actualizan dos parametros, uno con el numero de cita necesario
      y otro para saber si mostrar el pop-up o no.
     */
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains('cancelarCita')) {
        const num_cita = target.id.split('-')[1];
        this.num_cita_enviar = num_cita;
        this.mostrarPopUp = true;
      }
    });
  }

  abrirPopup() {
    this.mostrarPopUp = true;
  }

  cerrarPopup(cerrar: boolean) {
    this.mostrarPopUp = !cerrar;
  }
}
