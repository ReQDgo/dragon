import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteBuscarCitaRadiologoComponent } from './componente-buscar-cita-radiologo.component';

describe('ComponenteBuscarCitaRadiologoComponent', () => {
  let component: ComponenteBuscarCitaRadiologoComponent;
  let fixture: ComponentFixture<ComponenteBuscarCitaRadiologoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteBuscarCitaRadiologoComponent]
    });
    fixture = TestBed.createComponent(ComponenteBuscarCitaRadiologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
