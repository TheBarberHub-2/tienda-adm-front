import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUserTablaBem } from './c-user-tabla-bem';

describe('CUserTablaBem', () => {
  let component: CUserTablaBem;
  let fixture: ComponentFixture<CUserTablaBem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CUserTablaBem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CUserTablaBem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
