import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteModificarCitaAdministrativoComponent } from './componente-modificar-cita-administrativo.component';

describe('ComponenteModificarCitaAdministrativoComponent', () => {
  let component: ComponenteModificarCitaAdministrativoComponent;
  let fixture: ComponentFixture<ComponenteModificarCitaAdministrativoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteModificarCitaAdministrativoComponent]
    });
    fixture = TestBed.createComponent(ComponenteModificarCitaAdministrativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
