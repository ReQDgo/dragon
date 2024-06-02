import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente-boton-retroceder-continuar',
  templateUrl: './componente-boton-retroceder-continuar.component.html',
  styleUrls: ['./componente-boton-retroceder-continuar.component.css'],
})
export class ComponenteBotonRetrocederContinuarComponent {
  @Input() buttonText: string = ''; //VARIABLE PARA CAMBIAR EL TEXTO DEL BOTON AZUL
  @Input() mostrarBotonRetroceder: boolean = true; //VARIABLE PARA MOSTRAR O DESMOSTRAR EL BOTON RETROCEDER DEL COMPONENTE
  @Input() rutaProximoPaso: string = '';
  @Input() rutaAnteriorPaso: string = '';

  
  @Input() estiloBotonRetroceder: any = {};
  @Input() estiloBotonContinuar: any = {};


 
}
