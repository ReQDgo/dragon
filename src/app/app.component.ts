import { Component } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'componentesProyecto';
  mostrarBarra: boolean = true; // boolean para mostrar u ocultar el sidebar.

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.detectarRuta();
      });
  }
  // Método para detectar la ruta. Si la ruta es /paciente, el sidebar no se mostrará.
  private detectarRuta(): void {
    const ruta = this.router.url;
    this.mostrarBarra = !(
      ruta.startsWith('/paciente') || ruta.startsWith('/login')
    );
  }
}
