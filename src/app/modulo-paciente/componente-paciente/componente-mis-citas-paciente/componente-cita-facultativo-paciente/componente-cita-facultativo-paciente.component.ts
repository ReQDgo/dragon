import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Importa ActivatedRoute aquí

@Component({
  selector: 'app-componente-cita-facultativo-paciente',
  templateUrl: './componente-cita-facultativo-paciente.component.html',
  styleUrls: ['./componente-cita-facultativo-paciente.component.css'],
})
export class ComponenteCitaFacultativoPacienteComponent {
  nombreDoctor: string = '';
  tipoCita: string = '';
  fechaCita: string = '';
  horaCita: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() { 
    // Obtener el valor de los parámetros de la URL y formatear la fecha a formato dd-mm-yyyy
    this.route.queryParams.subscribe((params) => {
      this.nombreDoctor = params['nombreDoctor'] || '';
      this.tipoCita = params['tipoCita'] || '';
      this.fechaCita = this.cambiarFormatoFecha(params['fechaCita']) || '';
      this.horaCita = params['horaCita'] || '';
    });
  }

  // Función para formatear la fecha de YYY-mm-dd a dd-mm-yyyy
  cambiarFormatoFecha(fecha: string): string {
    let fechaNueva = new Date(fecha);
    let dia = fechaNueva.getDate();
    let mes = fechaNueva.getMonth() + 1; // Los meses son indexados desde 0
    let year = fechaNueva.getFullYear();

    // Formato dd-mm-yyyy
    return `${dia < 10 ? '0' : ''}${dia}-${mes < 10 ? '0' : ''}${mes}-${year}`;
  }
}
