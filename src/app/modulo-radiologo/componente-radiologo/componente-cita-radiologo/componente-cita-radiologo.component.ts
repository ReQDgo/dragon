import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente-cita-radiologo',
  templateUrl: './componente-cita-radiologo.component.html',
  styleUrls: ['./componente-cita-radiologo.component.css']
})
export class ComponenteCitaRadiologoComponent {
  @Input() siguienteRuta: string = '';
}