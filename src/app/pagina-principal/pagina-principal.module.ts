import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraPadreComponent } from './barra-padre/barra-padre.component';
import { AppRoutingModule } from '../app-routing.module';
import { MenuUsuariosComponent } from './menu-usuarios/menu-usuarios.component';

@NgModule({
  declarations: [
    BarraPadreComponent,
    MenuUsuariosComponent
  ],
  imports: [
    CommonModule,    
    AppRoutingModule
  ],
  exports: [
    BarraPadreComponent,
    MenuUsuariosComponent
  ]
})

export class PaginaPrincipalModule {
  
  // Este componente es la barra lateral con el icono del IVO y el icono 'Salir', ya que son los únicos elementos que permanecerán indendientemente del rol que inicie sesión.

  
}
