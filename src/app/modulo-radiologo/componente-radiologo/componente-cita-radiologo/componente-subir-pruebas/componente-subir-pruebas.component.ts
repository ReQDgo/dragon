import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../../services/servicio-auth/auth.service';
import { InformeService } from '../../../../services/servicio-informes/informe.service';
import { ImagenesService } from '../../../../services/servicio-imagenes/imagenes.service';
import { CitasService } from '../../../../services/servicio-citas/citas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
@Component({
  selector: 'app-componente-subir-pruebas',
  templateUrl: './componente-subir-pruebas.component.html',
  styleUrls: ['./componente-subir-pruebas.component.css'],
})
export class ComponenteSubirPruebasComponent implements OnInit {
  @Input() tituloImagenes: string = '';
  @Input() siguienteRuta: string = '';

  mostrarPopUps: boolean = false;
  selectedFiles: File[] = []; //array de archivos subidos
  selectedFileIndex: number | null = null; // Nueva variable para el índice del archivo seleccionado

  textAreaOriginalContent: string = '';
  textAreasImagenesContent: string[] = []; // Array para almacenar los contenidos de los textAreas de las imágenes
  
  usuarioId: number = 0;
  id: number=0; //id de la cita
  id_paciente: number=0;
  datos: any = {};
  numCita: number=0;

  nombreImagen: string = '';

  constructor(private authService: AuthService, private informeService: InformeService, private route: ActivatedRoute, 
    private router: Router, private imagenesService: ImagenesService, private citasService:CitasService) {}

  

  ngOnInit(): void {
    // Obtener el ID del usuario al iniciar el componente
  this.authService.obtenerUsuarioId().subscribe((id: number | null) => {
    if (id !== null) {
      this.usuarioId = id;
    }
  });
    this.route.queryParams.subscribe(params => {  //Recogemos algunos datos a través de la URL
      this.id = params['id'];
      this.id_paciente= params['id_paciente']
      this.numCita=params['num_cita']
    });
  }

  togglePopUps(index: number): void {
    this.selectedFileIndex = index;
    this.mostrarPopUps = !this.mostrarPopUps;
  }

  cerrarPopUps(): void {
    this.selectedFileIndex = null;
    this.mostrarPopUps = false;
  
    // Limpiar el textAreaOriginalContent
    this.textAreaOriginalContent = '';
  
    // Concatenar el nombre del archivo con su contenido en textAreaOriginalContent
    for (let i = 0; i < this.selectedFiles.length; i++) {
      const fileContent = this.textAreasImagenesContent[i] || ''; // Obtener el contenido del textArea de la imagen o cadena vacía si no hay contenido
      this.textAreaOriginalContent += `\n${fileContent}\n`;    //Concatena el contenido de los textAreaImagenesContent (el texto de los popUps de las imágenes)
                                                              //al contenido del textAreaOriginal (el textArea del cual cogemos el conenido del informe)
    }
  }
  
  onFileSelected(event: any): void {
    const fileInput = event.target;
  
    if (fileInput.files && fileInput.files.length > 0) {
      //Añadir cada archivo al array selectedFiles
      for (let i = 0; i < fileInput.files.length; i++) {
        const file = fileInput.files[i];
        this.selectedFiles.push(file);
        
        
        this.nombreImagen = file.name; // Asignar el nombre del archivo a la propiedad nombreImagen
      }
    }
  }

  crearUrl(file: File): string {
    return URL.createObjectURL(file); //Crea la URL de tipo blob, para archivos como imágenes...etc. (Al subirlas a la BD no tienen esta ruta, solamente es para mostrarla en el popUp de una
  }                                                                                                                                                           //manera más sencilla y rápida)


  onTextoCambiado(texto: string): void {
    if (this.selectedFileIndex !== null) { //Si hay un archivo seleccionado...
      this.textAreasImagenesContent[this.selectedFileIndex] = texto; //Actualiza el contenido de un textAreaImagen en concreto (el seleccionado)
    }
  }

  guardarInforme() {
    this.datos.contenido = this.textAreaOriginalContent;
    this.datos.id_cita = this.id;
    this.datos.id_radiologo = this.usuarioId;
  
    this.informeService.guardar(this.datos).pipe( //Utilizamos pipe y tap para realizar acciones después de guardar los datos en los campos de la BD, 
      tap((data: any) => {                               //asi no saseguramos de que se guarden los datos primero y después realizar lo que haga falta
       
        const id_informe = data.id_informe; // Obtener el ID del informe recién guardado
          
        this.guardarImagenes(id_informe); // Llamar a la función guardarImagenes() con el ID del informe creado
        this.cumplirCita();
        
        this.router.navigate(['radiologo/buscarCita/citas/confirmacion']); // Navegar a la página de confirmación
      })
    ).subscribe((data: any) => {
    });
  }
  
  guardarImagenes(id_informe: number) {
    this.selectedFiles.forEach((imagen: File) => { // Iterar sobre el array de imágenes y guardar cada una
      
      const formData = new FormData(); // Crear un objeto FormData para enviar la imagen al servidor
      formData.append('id_informe', id_informe.toString()); // Convertir id_informe a una cadena de caracteres porque formData solo acepta strings
      formData.append('id_paciente', this.id_paciente.toString());
      formData.append('nombre_imagen', imagen.name); 
      
      // Agregar la imagen al FormData
      formData.append('ruta_imagen', imagen); //Guardamos la ruta de la imagen junto con la clave 'ruta_imagen', "imagen" es una instancia de la clase File, 
      formData.append('id_cita', this.id.toString());                                                //que representa un archivo seleccionado por el usuario
      // Guardar el FormData en el servicio de imágenes
      this.imagenesService.guardar(formData).subscribe((data: any) => {
      });
    });
  }

  cumplirCita() {
    this.citasService.cumplirCita(this.numCita) //Coge el num_cita como referencia para cambiar el estado de esa cita
      .subscribe((data: any) => {
      });
  }
  
  
  eliminarImagen(index: number): void {
    // Eliminar la imagen del array selectedFiles
    this.selectedFiles.splice(index, 1);
  
    // Eliminar el contenido del textArea de la imagen del array textAreasImagenesContent
    this.textAreasImagenesContent.splice(index, 1);
  
    // Actualizar el textAreaOriginalContent con el contenido actualizado de textAreasImagenesContent
    this.textAreaOriginalContent = this.textAreasImagenesContent.join(`\n`);
  }
  



}