// IMPORTACIONES GENERALES:
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
// IMPORTACIONES RADIÓLOGO:
import { ComponenteRadiologoComponent } from './componente-radiologo/componente-radiologo.component';
import { ComponenteBuscarCitaRadiologoComponent } from './componente-radiologo/componente-buscar-cita-radiologo/componente-buscar-cita-radiologo.component';
import { ComponenteCajaBlancaMedianaComponent } from './componente-radiologo/componente-buscar-cita-radiologo/componente-caja-blanca-mediana/componente-caja-blanca-mediana.component';
import { ComponenteCitaRadiologoComponent } from './componente-radiologo/componente-cita-radiologo/componente-cita-radiologo.component';
import { ComponenteSubirPruebasComponent } from './componente-radiologo/componente-cita-radiologo/componente-subir-pruebas/componente-subir-pruebas.component';
import { ComponenteInformePruebasComponent } from './componente-radiologo/componente-cita-radiologo/componente-informe-pruebas/componente-informe-pruebas.component';
import { ComponenteCajaInformacionPacienteComponent } from './componente-radiologo/componente-cita-radiologo/componente-caja-informacion-paciente/componente-caja-informacion-paciente.component';
import { ComponenteConfirmacionInformeComponent } from './componente-radiologo/componente-confirmacion-informe/componente-confirmacion-informe.component';

// IMPORTACIÓN MÓDULO ELEMENTOS GENERALES:
import { ModuloElementosGeneralesModule } from '../modulo-elementos-generales/modulo-elementos-generales.module';

@NgModule({
  declarations: [
    ComponenteRadiologoComponent,
    ComponenteBuscarCitaRadiologoComponent,
    ComponenteCitaRadiologoComponent,
    ComponenteCajaBlancaMedianaComponent,
    ComponenteSubirPruebasComponent,
    ComponenteInformePruebasComponent,
    ComponenteCajaInformacionPacienteComponent,
    ComponenteConfirmacionInformeComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ModuloElementosGeneralesModule,
    FormsModule,
    ReactiveFormsModule,
  ],

  exports: [],
})
export class ModuloRadiologoModule {}
