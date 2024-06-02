import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';

import { ComponenteBotonesCabeceraComponent } from './componente-botones-cabecera/componente-botones-cabecera.component';
import { ComponenteCajaBlancaComponent } from './componente-caja-blanca/componente-caja-blanca.component';
import { ComponentePasosFormularioComponent } from './componente-pasos-formulario/componente-pasos-formulario.component';
import { ComponenteFormularioComponent } from './componente-formulario/componente-formulario.component';
import { ComponenteBotonRetrocederContinuarComponent } from './componente-boton-retroceder-continuar/componente-boton-retroceder-continuar.component';
import { ComponenteConfirmacionComponent } from './componente-confirmacion/componente-confirmacion.component';
import { ComponenteResumenDatosCrearCitaPasoTresComponent } from './componente-resumen-datos-crear-cita-paso-tres/componente-resumen-datos-crear-cita-paso-tres.component';
import { ComponenteErrorComponent } from './componente-error/componente-error.component';
import { ComponenteResumenDatosPacienteComponent } from "./componente-resumen-datos-paciente/componente-resumen-datos-paciente.component";


@NgModule({
  declarations: [
    ComponenteBotonesCabeceraComponent,
    ComponenteCajaBlancaComponent,
    ComponentePasosFormularioComponent,
    ComponenteFormularioComponent,
    ComponenteBotonRetrocederContinuarComponent,
    
    ComponenteConfirmacionComponent,
    ComponenteResumenDatosCrearCitaPasoTresComponent,
    ComponenteErrorComponent,
    ComponenteResumenDatosPacienteComponent
  ],

  imports: [
    CommonModule, FormsModule, AppRoutingModule, RouterModule,ReactiveFormsModule,HttpClientModule
  ],

  exports: [
    ComponenteBotonesCabeceraComponent,
    ComponenteCajaBlancaComponent,
    ComponentePasosFormularioComponent,
    ComponenteFormularioComponent,
    ComponenteBotonRetrocederContinuarComponent,
    ComponenteConfirmacionComponent,
    ComponenteErrorComponent,
    ComponenteResumenDatosCrearCitaPasoTresComponent
  ],
})
export class ModuloElementosGeneralesModule {}
