import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-componente-medico',
  templateUrl: './componente-medico.component.html',
  styleUrls: ['./componente-medico.component.css']
})
export class ComponenteMedicoComponent {
  rutaActiva: string = '';

  constructor(private router: Router) {}


}
