import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteEliminarCitaAdministrativoComponent } from './componente-eliminar-cita-administrativo.component';

describe('ComponenteEliminarCitaAdministrativoComponent', () => {
  let component: ComponenteEliminarCitaAdministrativoComponent;
  let fixture: ComponentFixture<ComponenteEliminarCitaAdministrativoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteEliminarCitaAdministrativoComponent]
    });
    fixture = TestBed.createComponent(ComponenteEliminarCitaAdministrativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
