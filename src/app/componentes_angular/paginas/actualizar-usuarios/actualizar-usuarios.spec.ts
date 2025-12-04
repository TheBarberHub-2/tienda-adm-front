import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarUsuarios } from './actualizar-usuarios';

describe('ActualizarUsuarios', () => {
  let component: ActualizarUsuarios;
  let fixture: ComponentFixture<ActualizarUsuarios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarUsuarios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarUsuarios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
