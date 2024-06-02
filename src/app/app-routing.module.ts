import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// IMPORTS LOGIN:
import { ComponenteLoginComponent } from './componente-login/componente-login.component';

// IMPORTS ADMINISTRATIVO:
import { ComponenteCitasAdministrativoComponent } from './modulo-administrativo/componente-administrativo/componente-citas-administrativo/componente-citas-administrativo.component';
import { ComponenteCrearCitaAdministrativoComponent } from './modulo-administrativo/componente-administrativo/componente-crear-cita-administrativo/componente-crear-cita-administrativo.component';
import { ComponenteCrearPacienteAdministrativoComponent } from './modulo-administrativo/componente-administrativo/componente-crear-paciente-administrativo/componente-crear-paciente-administrativo.component';
import { ComponenteModificarCitaAdministrativoComponent } from './modulo-administrativo/componente-administrativo/componente-modificar-cita-administrativo/componente-modificar-cita-administrativo.component';
import { ComponenteModificarCitaPasoDosComponent } from './modulo-administrativo/componente-administrativo/componente-modificar-cita-administrativo/componente-modificar-cita-paso-dos/componente-modificar-cita-paso-dos.component';
import { ConfirmacionModificacionCitaComponent } from './modulo-administrativo/componente-administrativo/componente-modificar-cita-administrativo/confirmacion-modificacion-cita/confirmacion-modificacion-cita.component';
import { ComponenteEliminarCitaAdministrativoComponent } from './modulo-administrativo/componente-administrativo/componente-eliminar-cita-administrativo/componente-eliminar-cita-administrativo.component';
import { ConfirmacionEliminacionCitaComponent } from './modulo-administrativo/componente-administrativo/componente-eliminar-cita-administrativo/confirmacion-eliminacion-cita/confirmacion-eliminacion-cita.component';
import { ComponenteCrearCitaPasoDosComponent } from './modulo-administrativo/componente-administrativo/componente-crear-cita-administrativo/componente-crear-cita-paso-dos/componente-crear-cita-paso-dos.component';
import { ComponenteCrearCitaPasoTresComponent } from './modulo-administrativo/componente-administrativo/componente-crear-cita-administrativo/componente-crear-cita-paso-tres/componente-crear-cita-paso-tres.component';
import { ComponenteCrearPacientePasoDosComponent } from './modulo-administrativo/componente-administrativo/componente-crear-paciente-administrativo/componente-crear-paciente-paso-dos/componente-crear-paciente-paso-dos.component';
import { ComponenteCrearPacientePasoTresComponent } from './modulo-administrativo/componente-administrativo/componente-crear-paciente-administrativo/componente-crear-paciente-paso-tres/componente-crear-paciente-paso-tres.component';
import { ConfirmacionCreacionCitaComponent } from './modulo-administrativo/componente-administrativo/componente-crear-cita-administrativo/confirmacion-creacion-cita/confirmacion-creacion-cita.component';
import { ComponenteRetirarStockComponent } from './modulo-administrativo/componente-administrativo/componente-retirar-stock/componente-retirar-stock.component';


// IMPORTS RADIÓLOGO:
import { ComponenteRadiologoComponent } from './modulo-radiologo/componente-radiologo/componente-radiologo.component';
import { ComponenteBuscarCitaRadiologoComponent } from './modulo-radiologo/componente-radiologo/componente-buscar-cita-radiologo/componente-buscar-cita-radiologo.component';
import { ComponenteSubirPruebasComponent } from './modulo-radiologo/componente-radiologo/componente-cita-radiologo/componente-subir-pruebas/componente-subir-pruebas.component';
import { ComponenteConfirmacionInformeComponent } from './modulo-radiologo/componente-radiologo/componente-confirmacion-informe/componente-confirmacion-informe.component';

// IMPORTS MÉDICO:
import { ComponenteMedicoComponent } from './modulo-medico/componente-medico/componente-medico.component';
import { ComponenteInicioMedicoComponent } from './modulo-medico/componente-medico/componente-inicio-medico/componente-inicio-medico.component';
import { ComponenteCitaMedicoComponent } from './modulo-medico/componente-medico/componente-cita-medico/componente-cita-medico.component';

// IMPORTS PACIENTE:
import { ComponentePacienteComponent } from './modulo-paciente/componente-paciente/componente-paciente.component';
import { ComponentePedirCitaPacienteComponent } from './modulo-paciente/componente-paciente/componente-pedir-cita-paciente/componente-pedir-cita-paciente.component';
import { ComponentePedirCitaPasoDosComponent } from './modulo-paciente/componente-paciente/componente-pedir-cita-paciente/componente-pedir-cita-paso-dos/componente-pedir-cita-paso-dos.component';
import { ComponentePedirCitaPasoTresComponent } from './modulo-paciente/componente-paciente/componente-pedir-cita-paciente/componente-pedir-cita-paso-tres/componente-pedir-cita-paso-tres.component';
import { ComponentePedirCitaPasoCuatroComponent } from './modulo-paciente/componente-paciente/componente-pedir-cita-paciente/componente-pedir-cita-paso-cuatro/componente-pedir-cita-paso-cuatro.component';
import { ComponentePedirCitaPasoCincoComponent } from './modulo-paciente/componente-paciente/componente-pedir-cita-paciente/componente-pedir-cita-paso-cinco/componente-pedir-cita-paso-cinco.component';

import { ComponenteMisCitasPacienteComponent } from './modulo-paciente/componente-paciente/componente-mis-citas-paciente/componente-mis-citas-paciente.component';
import { ComponenteCitaFacultativoPacienteComponent } from './modulo-paciente/componente-paciente/componente-mis-citas-paciente/componente-cita-facultativo-paciente/componente-cita-facultativo-paciente.component';
import { ComponenteCitaEspecialistaPacienteComponent } from './modulo-paciente/componente-paciente/componente-mis-citas-paciente/componente-cita-especialista-paciente/componente-cita-especialista-paciente.component';
import { ComponentePedirCitaPacienteFinalComponent } from './modulo-paciente/componente-paciente/componente-pedir-cita-paciente/componente-pedir-cita-paciente-final/componente-pedir-cita-paciente-final.component';
import { ComponenteCancelarCitaPacienteComponent } from './modulo-paciente/componente-paciente/componente-mis-citas-paciente/componente-cancelar-cita-paciente/componente-cancelar-cita-paciente.component';
import { ComponenteCancelarCitaPacienteFinalComponent } from './modulo-paciente/componente-paciente/componente-mis-citas-paciente/componente-cancelar-cita-paciente-final/componente-cancelar-cita-paciente-final.component';
import { RolGuard } from './Guard/rol.guard';
import { LoginGuard } from './Guard/login.guard';


const routes: Routes = [
  // LOGIN
  { path: 'login', component: ComponenteLoginComponent },

  // ADMINISTRATIVO

  {
    path: 'administrativo',
    component: ComponenteCitasAdministrativoComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 2,
    },
  },

  {
    path: 'administrativo/citas',
    component: ComponenteCitasAdministrativoComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 2,
    },
  },

  {
    path: 'administrativo/crearPaciente',
    component: ComponenteCrearPacienteAdministrativoComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 2,
    },
  },

  {
    path: 'administrativo/crearPaciente/crearPacientePaso2',
    component: ComponenteCrearPacientePasoDosComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 2,
    },
  },

  {
    path: 'administrativo/crearPaciente/crearPacientePaso3',
    component: ComponenteCrearPacientePasoTresComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 2,
    },
  },

  {
    path: 'administrativo/crearPaciente/confirmacionCreacionPaciente',
    component: ConfirmacionCreacionCitaComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 2,
    },
  },

  {
    path: 'administrativo/crearCita',
    component: ComponenteCrearCitaAdministrativoComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 2,
    },
  },

  {
    path: 'administrativo/crearCita/crearCitaPaso2',
    component: ComponenteCrearCitaPasoDosComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 2,
    },
  },

  {
    path: 'administrativo/crearCita/crearCitaPaso3',
    component: ComponenteCrearCitaPasoTresComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 2,
    },
  },

  {
    path: 'administrativo/crearCita/confirmacionCreacionCita',
    component: ConfirmacionCreacionCitaComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 2,
    },
  },

  {
    path: 'administrativo/modificarCita',
    component: ComponenteModificarCitaAdministrativoComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 2,
    },
  },

  {
    path: 'administrativo/modificarCita/modificarCitaPaso2',
    component: ComponenteModificarCitaPasoDosComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 2,
    },
  },

  {
    path: 'administrativo/modificarCita/confirmacionModificarCita',
    component: ConfirmacionModificacionCitaComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 2,
    },
  },

  {
    path: 'administrativo/eliminarCita',
    component: ComponenteEliminarCitaAdministrativoComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 2,
    },
  },

  {
    path: 'administrativo/eliminarCita/confirmacionEliminarCita',
    component: ConfirmacionEliminacionCitaComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 2,
    },
  },

  {
    path: 'administrativo/retirar-stock',
    component: ComponenteRetirarStockComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 2,
    },
  },

  // RADIÓLOGO:
  {
    path: 'radiologo',
    component: ComponenteRadiologoComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 1,
    },
  },

  {
    path: 'radiologo/buscarCita',
    component: ComponenteBuscarCitaRadiologoComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 1,
    },
  },

  {
    path: 'radiologo/buscarCita/citas',
    component: ComponenteSubirPruebasComponent,
    canActivate: [LoginGuard, RolGuard],
    data: {
      idRol: 1,
    },
  },

  {
    path: 'radiologo/buscarCita/citas/confirmacion',
    component: ComponenteConfirmacionInformeComponent,
    canActivate: [LoginGuard, RolGuard],
    data: {
      idRol: 1,
    },
  },

  // MÉDICO:
  {
    path: 'medico',
    component: ComponenteMedicoComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 3,
    },
  },

  {
    path: 'medico/inicio',
    component: ComponenteInicioMedicoComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 3,
    },
  },

  {
    path: 'medico/citas/:dni/:fecha/:hora/:nombrePaciente/:id_paciente',
    component: ComponenteCitaMedicoComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 3,
    },
  },

  // PACIENTE:
  {
    path: 'paciente',
    component: ComponentePacienteComponent,
    canActivate: [LoginGuard, RolGuard],
    data: {
      idRol: 4,
    },
  },

  {
    path: 'paciente/pedirCita',
    component: ComponentePedirCitaPacienteComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 4,
    },
  },

  {
    path: 'paciente/pedirCita/pedirCitaPaso2',
    component: ComponentePedirCitaPasoDosComponent,
    canActivate: [LoginGuard, RolGuard],
    data: {
      idRol: 4,
    },
  },

  {
    path: 'paciente/pedirCita/pedirCitaPaso3',
    component: ComponentePedirCitaPasoTresComponent,
    canActivate: [LoginGuard, RolGuard],
    data: {
      idRol: 4,
    },
  },

  {
    path: 'paciente/pedirCita/pedirCitaPaso4',
    component: ComponentePedirCitaPasoCuatroComponent,
    canActivate: [LoginGuard, RolGuard],
    data: {
      idRol: 4,
    },
  },

  {
    path: 'paciente/pedirCita/pedirCitaPaso5',
    component: ComponentePedirCitaPasoCincoComponent,
    canActivate: [LoginGuard, RolGuard],
    data: {
      idRol: 4,
    },
  },

  {
    path: 'paciente/pedirCita/confirmacion',
    component: ComponentePedirCitaPacienteFinalComponent,
    canActivate: [LoginGuard, RolGuard],
    data: {
      idRol: 4,
    },
  },

  {
    path: 'paciente/misCitas',
    component: ComponenteMisCitasPacienteComponent,
    canActivate: [LoginGuard, RolGuard],
    data: {
      idRol: 4,
    },
  },

  {
    path: 'paciente/misCitas/cancelarCita',
    component: ComponenteCancelarCitaPacienteComponent,
    canActivate: [LoginGuard, RolGuard],
    data: {
      idRol: 4,
    },
  },

  {
    path: 'paciente/misCitas/cancelarCitaConfirmacion',
    component: ComponenteCancelarCitaPacienteFinalComponent,
    canActivate: [LoginGuard, RolGuard],
    data: {
      idRol: 4,
    },
  },

  {
    path: 'paciente/misCitas/citaEspecialista',
    component: ComponenteCitaEspecialistaPacienteComponent,
    canActivate: [LoginGuard, RolGuard],
    data: {
      idRol: 4,
    },
  },

  {
    path: 'paciente/misCitas/citaFacultativo',
    component: ComponenteCitaFacultativoPacienteComponent,
    canActivate: [LoginGuard, RolGuard],
    data: {
      idRol: 4,
    },
  },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}