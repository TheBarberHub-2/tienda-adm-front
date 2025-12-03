import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CFooterBem } from './c-footer-bem';

describe('CFooterBem', () => {
  let component: CFooterBem;
  let fixture: ComponentFixture<CFooterBem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CFooterBem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CFooterBem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
