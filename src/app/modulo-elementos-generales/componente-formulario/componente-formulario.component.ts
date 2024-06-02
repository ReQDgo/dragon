import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente-formulario',
  templateUrl: './componente-formulario.component.html',
  styleUrls: ['./componente-formulario.component.css']
})
export class ComponenteFormularioComponent {
  

  @Input() labelNuevoMedico: string = 'Seleccionar nuevo médico:';
  @Input() labelNuevaFecha: string = 'Cambiar fecha:';
  @Input() labelNuevaHora: string = 'Cambiar hora:';
  @Input() labelInputCuatro: string = 'Asignar médico';

  @Input() mostrarNuevoMedico: boolean = true;
  @Input() mostrarNuevaFecha: boolean = true;
  @Input() mostrarNuevaHora: boolean = true;
  @Input() mostrarInputCuatro: boolean = false;

  
  @Input() mostrarEleccionMedico: boolean = false; // Select usado en Pedir cita (Paciente)

  // @Input() de 'Pedir cita' (Paciente):
  @Input() mostrarCheckboxesPedirCita: boolean = false;
  @Input() mostrarTercerCheckboxPedirCita: boolean = false;
  @Input() mostrarTercerLabelPedirCita: boolean = false;
  @Input() labelCheckboxesPedirCita: string = '';
  @Input() textoLabel1: string = '';
  @Input() textoLabel2: string = '';
  @Input() textoLabel3: string = '';
  @Input() valueCheckbox1: string = '';
  @Input() valueCheckbox2: string = '';
  @Input() valueCheckbox3: string = '';
  @Input() mostrarInputsPedirCita: boolean = false;
  @Input() estiloCheckboxesPaciente:any ={};  

  @Input() rutaProximoPaso: string = '';
  @Input() rutaAnteriorPaso: string = '';

  @Input() mostrarBotonRetroceder: boolean = false;
  @Input() mostrarFormCrearPaciente: boolean = false;
  @Input() mostrarFormPrincipal: boolean = false;

  @Input() estilosFormulario: any = {};
  @Input() estiloBotonRetroceder: any = {};
  @Input() estiloBotonContinuar: any = {};


// Función para seleccionar sólo un checkbox en 'Pedir cita':
  seleccionarUnCheckbox(event: any) {
    let checkboxes = document.getElementsByName('checkboxGroup') as NodeListOf<HTMLInputElement>;
  
    checkboxes.forEach((checkbox) => {
      if (checkbox !== event.target) {
        checkbox.checked = false;
      }
    });
  }
}
