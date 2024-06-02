import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

/**
 * Para poder tener un buen horario, se hace uso del angular material.
    En escpecifico, se usa el material (mat-calendar). Este luego se ajusta 
    modificando el css para que sea mas parecido a lo que se ha visualizado.
 */
@Component({
  selector: 'app-componente-horario-sidebar-medico',
  templateUrl: './componente-horario-sidebar-medico.component.html',
  styleUrls: ['./componente-horario-sidebar-medico.component.css'],
  standalone: true,
  imports: [
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CommonModule,
  ],
})
export class ComponenteHorarioSidebarMedicoComponent {
  selected: Date | undefined; // Servira para saber que dia se ha seleccionado del mat-calendar.
  formattedDate: string = ''; // Almacena la fecha formateada.
  citasDelDiaSeleccionado: any;

  // Se usa el HttpClient para conectar con el back-end.
  constructor(private http: HttpClient) {}

  /**
    Este método se activará cada vez que cambie la fecha seleccionada.
    Lo que hace es formatear la fecha como se muestra en la base de datos.
   * 
   * @param event Elevento del dia seleccionado.
   */
  onDateSelected(event: any) {
    // Se hace uso de la clase Date, para facilitar el trabajo.
    const date = new Date(event);
    if (!isNaN(date.getTime())) {
      const year = date.getFullYear();
      const month =
        (date.getMonth() + 1 < 10 ? '0' : '') + (date.getMonth() + 1);
      const day = (date.getDate() < 10 ? '0' : '') + date.getDate();
      this.formattedDate = `${year}-${month}-${day}`;
      this.citasPorFecha(this.formattedDate); // La fecha formateada se pasa a otro metodo.
    } else {
      this.formattedDate = ''; // Resetea la fecha formateada si la fecha seleccionada no es válida
      console.error('Fecha inválida');
    }
  }

  /**
   * Ya con la fecha formateada, se podra meter en la url del back-end
    para asi seguir bien su funcionalidad.
   * @param fechaSeleccionada La fecha que se ha seleccionado en el calendario, formateada.
   */
  citasPorFecha(fechaSeleccionada: string) {
    const storedUserId = localStorage.getItem('id') || '';
    this.http
      .get<any[]>(
        'http://127.0.0.1:8000/api/citas/mostrarCitasPorFechaMedico/' +
          fechaSeleccionada +
          '/' + parseInt(storedUserId)
      )
      .subscribe((resultado) => {
        this.citasDelDiaSeleccionado = resultado;
      });
  }

  /**
    Sirve para mostrarse en como seguimiento de a que hora
    comienza la cita.
   *
   * @param hora Se le pasa una hora.
   * @returns Devuelve la hora formateada.
   */
  mostrarHoraFormateada(hora: string): string {
    const horaDate = new Date('2000-01-01T' + hora);
    return horaDate.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  /**
    Sirve para mostrarse en como seguimiento de a que hora
    termina la cita.
   *
   * @param hora Se le pasa una hora.
   * @returns Devuelve la hora + 1 formateada.
   */
  sumarUnaHora(hora: string): string {
    const horaDate = new Date('2000-01-01T' + hora);
    horaDate.setHours(horaDate.getHours() + 1);

    return horaDate.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  }
}
