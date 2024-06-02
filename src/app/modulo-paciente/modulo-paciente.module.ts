// IMPORTACIONES GENERALES:
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';

// IMPORTACIONES PACIENTE:
import { ComponentePacienteComponent } from './componente-paciente/componente-paciente.component';
import { ComponentePedirCitaPacienteComponent } from './componente-paciente/componente-pedir-cita-paciente/componente-pedir-cita-paciente.component';
import { ComponenteMisCitasPacienteComponent } from './componente-paciente/componente-mis-citas-paciente/componente-mis-citas-paciente.component';
import { ComponenteCajasInformacionPacienteComponent } from './componente-paciente/componente-mis-citas-paciente/componente-cajas-informacion-paciente/componente-cajas-informacion-paciente.component';
import { ComponenteHistorialPacienteComponent } from './componente-paciente/componente-mis-citas-paciente/componente-historial-paciente/componente-historial-paciente.component';
import { ComponenteCitaEspecialistaPacienteComponent } from './componente-paciente/componente-mis-citas-paciente/componente-cita-especialista-paciente/componente-cita-especialista-paciente.component';
import { ComponenteCitaFacultativoPacienteComponent } from './componente-paciente/componente-mis-citas-paciente/componente-cita-facultativo-paciente/componente-cita-facultativo-paciente.component';
import { ComponenteInformeDoctorPacienteComponent } from './componente-paciente/componente-mis-citas-paciente/componente-informe-doctor-paciente/componente-informe-doctor-paciente.component';
import { ComponenteDetallesCitaPacienteComponent } from './componente-paciente/componente-mis-citas-paciente/componente-detalles-cita-paciente/componente-detalles-cita-paciente.component';
import { ComponentePedirCitaPasoDosComponent } from './componente-paciente/componente-pedir-cita-paciente/componente-pedir-cita-paso-dos/componente-pedir-cita-paso-dos.component';
import { ComponentePedirCitaPasoTresComponent } from './componente-paciente/componente-pedir-cita-paciente/componente-pedir-cita-paso-tres/componente-pedir-cita-paso-tres.component';
import { ComponentePedirCitaPasoCuatroComponent } from './componente-paciente/componente-pedir-cita-paciente/componente-pedir-cita-paso-cuatro/componente-pedir-cita-paso-cuatro.component';
import { ComponentePedirCitaPasoCincoComponent } from './componente-paciente/componente-pedir-cita-paciente/componente-pedir-cita-paso-cinco/componente-pedir-cita-paso-cinco.component';
import { ComponentePedirCitaPacienteFinalComponent } from './componente-paciente/componente-pedir-cita-paciente/componente-pedir-cita-paciente-final/componente-pedir-cita-paciente-final.component';

// IMPORTACIÓN MÓDULO ELEMENTOS GENERALES:
import { ModuloElementosGeneralesModule } from '../modulo-elementos-generales/modulo-elementos-generales.module';
import { ComponenteCancelarCitaPacienteComponent } from './componente-paciente/componente-mis-citas-paciente/componente-cancelar-cita-paciente/componente-cancelar-cita-paciente.component';
import { ComponenteCancelarCitaPacienteFinalComponent } from './componente-paciente/componente-mis-citas-paciente/componente-cancelar-cita-paciente-final/componente-cancelar-cita-paciente-final.component';

@NgModule({
  declarations: [
    ComponentePacienteComponent,
    ComponentePedirCitaPacienteComponent,
    ComponenteMisCitasPacienteComponent,
    ComponenteCajasInformacionPacienteComponent,
    ComponenteHistorialPacienteComponent,
    ComponenteCitaEspecialistaPacienteComponent,
    ComponenteCitaFacultativoPacienteComponent,
    ComponenteInformeDoctorPacienteComponent,
    ComponenteDetallesCitaPacienteComponent,
    ComponentePedirCitaPasoDosComponent,
    ComponentePedirCitaPasoTresComponent,
    ComponentePedirCitaPasoCuatroComponent,
    ComponentePedirCitaPasoCincoComponent,
    ComponentePedirCitaPacienteFinalComponent,
    ComponenteCancelarCitaPacienteComponent,
    ComponenteCancelarCitaPacienteFinalComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    ModuloElementosGeneralesModule,
    DataTablesModule,
    FormsModule
  ],
})
export class ModuloPacienteModule {}
