import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-componente-pedir-cita-paso-cuatro',
  templateUrl: './componente-pedir-cita-paso-cuatro.component.html',
  styleUrls: ['./componente-pedir-cita-paso-cuatro.component.css']
})
export class ComponentePedirCitaPasoCuatroComponent {
  @Input() mostrarUltimaPregunta: boolean = false;

}
