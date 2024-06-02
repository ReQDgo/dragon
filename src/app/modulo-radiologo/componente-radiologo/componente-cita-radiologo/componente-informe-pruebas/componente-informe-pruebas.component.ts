import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-componente-informe-pruebas',
  templateUrl: './componente-informe-pruebas.component.html',
  styleUrls: ['./componente-informe-pruebas.component.css']
})
export class ComponenteInformePruebasComponent {
  @Input() anchoInforme: number = 0;
  @Input() alturaInforme: number = 0;
  @Input() id: string = '';

  @Output() textoCambiado: EventEmitter<string> = new EventEmitter<string>();

  textAreaContentInforme: string = ''; 
  lastTextAreaValue: string = ''; // Variable para almacenar el último valor del textarea

  constructor() {}

  onTextAreaInput(event: any): void {
    const newValue = event.target.value;

    if (newValue !== this.lastTextAreaValue) {
      this.textAreaContentInforme = newValue; 
      this.textoCambiado.emit(this.textAreaContentInforme);
      this.lastTextAreaValue = newValue;
    }
  }
}
