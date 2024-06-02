import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-componente-caja-informacion-paciente',
  templateUrl: './componente-caja-informacion-paciente.component.html',
  styleUrls: ['./componente-caja-informacion-paciente.component.css'],
})
export class ComponenteCajaInformacionPacienteComponent implements OnInit {
  dni: string = '';
  fecha: string = '';
  hora: string = '';
  nombrePaciente: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.dni = this.route.snapshot.paramMap.get('dni') || '';
    this.fecha = this.route.snapshot.paramMap.get('fecha') || '';
    this.hora = this.route.snapshot.paramMap.get('hora') || '';
    this.nombrePaciente = this.route.snapshot.paramMap.get('nombrePaciente') || '';
  }
}
