import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUserTabla } from './c-user-tabla';

describe('CUserTabla', () => {
  let component: CUserTabla;
  let fixture: ComponentFixture<CUserTabla>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CUserTabla]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CUserTabla);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
