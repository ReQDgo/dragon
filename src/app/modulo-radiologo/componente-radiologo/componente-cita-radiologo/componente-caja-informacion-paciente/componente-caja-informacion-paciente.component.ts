import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-componente-caja-informacion-paciente',
  templateUrl: './componente-caja-informacion-paciente.component.html',
  styleUrls: ['./componente-caja-informacion-paciente.component.css']
})
export class ComponenteCajaInformacionPacienteComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  id: string = '';
  nombrePaciente: string = '';
  dniPaciente: string = '';

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.nombrePaciente = decodeURIComponent(params['nombrePaciente']); //desencriptamos el nombre con esa función
      this.dniPaciente = params['dniPaciente'];
    });
  }
}
