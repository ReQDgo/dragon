import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-popup-confirmar-salir',
  templateUrl: './componente-popup-confirmar-salir.component.html',
  styleUrls: ['./componente-popup-confirmar-salir.component.css']
})
export class ComponentePopupConfirmarSalirComponent {
  ocultarPopUp: boolean = true;

  togglePopup() : void {
    this.ocultarPopUp = !this.ocultarPopUp;

    // TODO: Hacer que salga el pop-up cuando quiera salir.
  }
}
