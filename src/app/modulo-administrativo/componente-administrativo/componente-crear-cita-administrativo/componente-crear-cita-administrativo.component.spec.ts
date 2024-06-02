import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCrearCitaAdministrativoComponent } from './componente-crear-cita-administrativo.component';

describe('ComponenteCrearCitaAdministrativoComponent', () => {
  let component: ComponenteCrearCitaAdministrativoComponent;
  let fixture: ComponentFixture<ComponenteCrearCitaAdministrativoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteCrearCitaAdministrativoComponent]
    });
    fixture = TestBed.createComponent(ComponenteCrearCitaAdministrativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
