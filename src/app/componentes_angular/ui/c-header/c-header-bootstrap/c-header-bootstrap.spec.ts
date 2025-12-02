import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CHeaderBootstrap } from './c-header-bootstrap';

describe('CHeaderBootstrap', () => {
  let component: CHeaderBootstrap;
  let fixture: ComponentFixture<CHeaderBootstrap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CHeaderBootstrap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CHeaderBootstrap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
