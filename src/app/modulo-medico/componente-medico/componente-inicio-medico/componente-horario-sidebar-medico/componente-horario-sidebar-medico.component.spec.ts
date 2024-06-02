import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteHorarioSidebarMedicoComponent } from './componente-horario-sidebar-medico.component';

describe('ComponenteHorarioSidebarMedicoComponent', () => {
  let component: ComponenteHorarioSidebarMedicoComponent;
  let fixture: ComponentFixture<ComponenteHorarioSidebarMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteHorarioSidebarMedicoComponent]
    });
    fixture = TestBed.createComponent(ComponenteHorarioSidebarMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
