import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteBotonesCabeceraComponent } from './componente-botones-cabecera.component';

describe('ComponenteBotonesCabeceraComponent', () => {
  let component: ComponenteBotonesCabeceraComponent;
  let fixture: ComponentFixture<ComponenteBotonesCabeceraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteBotonesCabeceraComponent]
    });
    fixture = TestBed.createComponent(ComponenteBotonesCabeceraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
