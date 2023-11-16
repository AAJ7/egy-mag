import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviromentalImpactComponent } from './enviromental-impact.component';

describe('EnviromentalImpactComponent', () => {
  let component: EnviromentalImpactComponent;
  let fixture: ComponentFixture<EnviromentalImpactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviromentalImpactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnviromentalImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
