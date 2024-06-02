import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CitasService } from 'src/app/services/servicio-citas/citas.service';

@Component({
  selector: 'app-componente-popup-confirmar-cancelar',
  templateUrl: './componente-popup-confirmar-cancelar.component.html',
  styleUrls: ['./componente-popup-confirmar-cancelar.component.css'],
})
export class ComponentePopupConfirmarCancelarComponent {
  /**
    Para que la cita se cancele de manera segura, el pop-up es el que 
    permitirá el evento. Por eso se usan Input y Output, para pasar
    el numero de cita el cual se haya seleccionado a eliminar.

    Ademas de que se cierre el pop-up
   */
  @Output() cerrarPopup = new EventEmitter<boolean>();
  @Input() num_cita_recibido: string = '';

  constructor(private citasService: CitasService) {}

  confirmar() {
    this.cerrarPopup.emit(true);
  }

  cancelar() {
    this.cerrarPopup.emit(false);
    this.botonCancelarCita(this.num_cita_recibido);
  }

  botonCancelarCita(num_cita: string) {
    this.citasService.cancelarCita(num_cita).subscribe(
      (data) => {
        alert('Cita cancelada satisfactoriamente');
        location.reload();
      },
      (error) => {
        console.error('Error al cancelar la cita:', error);
      }
    );
  }
}
