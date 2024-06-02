import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-componente-administrativo',
  templateUrl: './componente-administrativo.component.html',
  styleUrls: ['./componente-administrativo.component.css'],
})
export class ComponenteAdministrativoComponent  {
  @Input() estilosPaso1: any = {};
  @Input() estilosPaso2: any = {};
  @Input() estilosPaso3: any = {};
  @Input() estilosPaso4: any = {};
} 