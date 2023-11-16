import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionSitesComponent } from './production-sites.component';

describe('ProductionSitesComponent', () => {
  let component: ProductionSitesComponent;
  let fixture: ComponentFixture<ProductionSitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionSitesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductionSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
