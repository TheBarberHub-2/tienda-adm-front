import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCardProduct } from './c-card-product';

describe('CCardProduct', () => {
  let component: CCardProduct;
  let fixture: ComponentFixture<CCardProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CCardProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CCardProduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
