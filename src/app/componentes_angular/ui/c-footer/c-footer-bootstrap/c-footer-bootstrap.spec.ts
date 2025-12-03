import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CFooterBootstrap } from './c-footer-bootstrap';

describe('CFooterBootstrap', () => {
  let component: CFooterBootstrap;
  let fixture: ComponentFixture<CFooterBootstrap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CFooterBootstrap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CFooterBootstrap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
