import { Component, OnInit, Input } from '@angular/core';
import { StylingService } from '../../services/styling.service';
import { SharedService } from '../../services/shared.service';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-componente-caja-diagnostico',
  templateUrl: './componente-caja-diagnostico.component.html',
  styleUrls: ['./componente-caja-diagnostico.component.css'],
})
export class ComponenteCajaDiagnosticoComponent implements OnInit {
  @Input() tipoTextarea: string = '';
  @Input() numeroRowsTextarea: string = '30';
  @Input() numeroColsTextarea: string = '20';
  contenidoTextarea: string = '';
  cajaStyle: any;
  isReadonly: boolean = false;

  constructor(
    private stylingService: StylingService,
    private sharedService: SharedService,
  ) {}

  ngOnInit() {
    this.stylingService.sharedStyle$.subscribe((style) => {
      this.cajaStyle = style;
    });

    this.sharedService.readonlyStatus$.subscribe((status) => {
      this.isReadonly = status;
    });
  }

  generarPDF() {
    let pdf = new jsPDF();

    // Obtener la fecha actual
    let fechaActual = new Date();
    let dia = fechaActual.getDate();
    let mes = fechaActual.toLocaleString('default', { month: 'long' }); // Nombre del mes
    let anio = fechaActual.getFullYear();

    // Concatenar la fecha en el formato deseado. Ejemplo: Valencia, a 1 de enero de 2024.
    let fecha = `${dia} de ${mes} de ${anio}`;

    let logoUrl = '/assets/images/IVO_CabeceraPDF.png';
    pdf.addImage(logoUrl, 'PNG', 55, -9, 110, 50);

    // Contenido del PDF con fuente y tamaño de letra personalizados
    pdf.setFont('arial', 'normal'); // Cambia la fuente y estilo (normal, italic, bold)
    pdf.setFontSize(13); // Cambia el tamaño de la letra

    const contenidoConSaltos = this.contenidoTextarea.replace(/\n/g, '\n'); // Reemplazar saltos de línea con dobles saltos

    const maxLineasPorPagina = 30; // Nos aseguramos que sólo se escriban 30 lineas por página del PDF.
    const alturaPagina = pdf.internal.pageSize.height;
    const anchoMaximo = 180;
    const margenInferior = 30; // Le damos un margin al pie de página en cada hoja para su mejora estética.

    let lineas = pdf.splitTextToSize(contenidoConSaltos, anchoMaximo);

    let y = 60;
    let lineasEnPagina = 0;

    for (let i = 0; i < lineas.length; i++) {
      if (
        lineasEnPagina >= maxLineasPorPagina ||
        y + 10 > alturaPagina - margenInferior
      ) {
        pdf.addPage();
        y = 35; // Establecer el valor inicial de y para la nueva página
        lineasEnPagina = 0;
      }
      pdf.text(lineas[i], 15, y, { maxWidth: anchoMaximo, align: 'justify' });
      y += 10;
      lineasEnPagina++;
    }

    pdf.text(
      `Valencia, a ${fecha}`,
      70,
      pdf.internal.pageSize.height - margenInferior
    );

    // Insertar imagen en el pie de página
    let pieImagenUrl1 = '/assets/images/IVO_PiePagina1.png';
    pdf.addImage(
      pieImagenUrl1,
      'PNG',
      6,
      pdf.internal.pageSize.height - 18,
      65,
      12
    );

    // Insertar imagen en el pie de página
    let pieImagenUrl2 = '/assets/images/IVO_PiePagina2.png';
    pdf.addImage(
      pieImagenUrl2,
      'PNG',
      155,
      pdf.internal.pageSize.height - 18,
      50,
      12
    );

    // Guardar el PDF
    if (this.tipoTextarea === 'Diagnóstico') {
      pdf.save('diagnostico.pdf');
    } else {
      pdf.save('informe.pdf');
    }
  }



  // BOTONES Y TEXT AREA

  /**
    Para el text area se modifican los colores para
    hacer ver si se puede o no escribir en este.
   */
  estilos_textarea_deshabilitado = {
    'border-color': '#E2E7EB',
    'color': '#B8BEC9',
    'cursor' : 'auto'
  };

  estilos_textarea_habilitado = {
    'border-color': 'black',
    'color': '#515151',
    'cursor' : 'auto'
  };

  /**
    Se usan inputs para poder facilitar el trabajo
    de muestra de los botones.
   */
  @Input() botonGenerarPDFAzul: boolean = true;
  @Input() botonGuardar: boolean = true;
  @Input() botonEditarDiagn: boolean = true;
  @Input() botonGuardarEdicion: boolean = true;

  /**
   * Dependiendo de que boton se presione
    se muestran unos botones o otros. 
    Y el text-area se deshabilita o no.
   */
  presiona_boton_guardar() {
    this.botonGenerarPDFAzul = false;
    this.botonGuardar = false;
    this.botonEditarDiagn = false;
    this.botonGuardarEdicion = true;
    this.stylingService.newStyle(this.estilos_textarea_deshabilitado);
    this.sharedService.updateReadonlyStatus(true);
  }

  presiona_boton_editar_diagn() {
    this.botonGenerarPDFAzul = true;
    this.botonGuardar = false;
    this.botonEditarDiagn = true;
    this.botonGuardarEdicion = false;
    this.stylingService.newStyle(this.estilos_textarea_habilitado);
    this.sharedService.updateReadonlyStatus(false);
  }
}
