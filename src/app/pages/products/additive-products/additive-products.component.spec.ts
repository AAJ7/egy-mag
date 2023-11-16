import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditiveProductsComponent } from './additive-products.component';

describe('AdditiveProductsComponent', () => {
  let component: AdditiveProductsComponent;
  let fixture: ComponentFixture<AdditiveProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditiveProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditiveProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
