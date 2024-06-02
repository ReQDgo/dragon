// IMPORTACIONES GENERALES:
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// ANGULAR MATERIAL
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponenteLoginComponent } from './componente-login/componente-login.component';

// IMPORTACIONES MÓDULOS ROLES IVO:
import { PaginaPrincipalModule } from './pagina-principal/pagina-principal.module';
import { ModuloElementosGeneralesModule } from './modulo-elementos-generales/modulo-elementos-generales.module';
import { ModuloAdministrativoModule } from './modulo-administrativo/modulo-administrativo.module';
import { ModuloRadiologoModule } from './modulo-radiologo/modulo-radiologo.module';
import { ModuloPacienteModule } from './modulo-paciente/modulo-paciente.module';
import { ModuloMedicoModule } from './modulo-medico/modulo-medico.module';

// IMPORTACIONES SERVICIOS:

import { CitasService } from './services/servicio-citas/citas.service';
import { UsuariosService } from './services/servicio-usuarios/usuarios.service';
import { ImagenesService } from './services/servicio-imagenes/imagenes.service';

//IMPORTACION TOKEN INTERCEPTOR
import { TokenInterceptor } from './Interceptor/token.interceptor';

@NgModule({
  declarations: [AppComponent, ComponenteLoginComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    PaginaPrincipalModule,
    ModuloElementosGeneralesModule,
    ModuloAdministrativoModule,
    ModuloRadiologoModule,
    ModuloMedicoModule,
    ModuloPacienteModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CitasService, 
    UsuariosService, 
    ImagenesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
