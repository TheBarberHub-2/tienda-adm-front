import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUserTablaBootstrap } from './c-user-tabla-bootstrap';

describe('CUserTablaBootstrap', () => {
  let component: CUserTablaBootstrap;
  let fixture: ComponentFixture<CUserTablaBootstrap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CUserTablaBootstrap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CUserTablaBootstrap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
