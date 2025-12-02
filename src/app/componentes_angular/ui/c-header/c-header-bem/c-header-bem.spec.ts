import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CHeaderBEM } from './c-header-bem';

describe('CHeaderBEM', () => {
  let component: CHeaderBEM;
  let fixture: ComponentFixture<CHeaderBEM>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CHeaderBEM]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CHeaderBEM);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
