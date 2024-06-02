import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImagenesService } from '../../../../services/servicio-imagenes/imagenes.service';

@Component({
  selector: 'app-componente-cita-especialista-paciente',
  templateUrl: './componente-cita-especialista-paciente.component.html',
  styleUrls: ['./componente-cita-especialista-paciente.component.css'],
})
export class ComponenteCitaEspecialistaPacienteComponent {

  // Almacenamos los datos recibidos en la URL en variables:
  idCita: string = '';
  nombreDoctor: string = '';
  tipoCita: string = '';
  fechaCita: string = '';
  horaCita: string = '';
  mostrarPopUps: boolean = false;
  arrayImagenes: { nombre_imagen: string; ruta_imagen: string }[] = [];
  mostrarImagenSeleccionada: string = '';

  constructor(
    private route: ActivatedRoute,
    private imagenesService: ImagenesService
  ) {}

  ngOnInit() { // Guardamos los datos de la URL en variables:
    // Obtener el valor de los parámetros de la URL
    this.route.queryParams.subscribe((params) => {
      this.idCita = params['id'] || '';
      this.nombreDoctor = params['nombreDoctor'] || '';
      this.tipoCita = params['tipoCita'] || '';
      this.fechaCita = this.cambiarFormatoFecha(params['fechaCita']) || '';
      this.horaCita = params['horaCita'] || '';
    });
    this.mostrarImagenesRadiologicas();
  }

  // Alterna la visibilidad de las imágenes en forma de pop-up.
  abrirPopUps() {
    this.mostrarPopUps = true;
  }

  cerrarPopUps(event: Event): void {
    event.stopPropagation(); // Evitar que el evento de clic se propague
    this.mostrarPopUps = false;
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

  mostrarImagenesRadiologicas() {
    this.imagenesService
      .mostrarImagenesDelPaciente(this.idCita)
      .subscribe((data: any) => {
        this.arrayImagenes = data.imagenes;
        console.log(this.arrayImagenes);
      });
  }

  abrirImagen(rutaImagen: string) {
    this.mostrarImagenSeleccionada = rutaImagen;
    this.abrirPopUps();
  }

}
