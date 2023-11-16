import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldClassRDComponent } from './world-class-r-d.component';

describe('WorldClassRDComponent', () => {
  let component: WorldClassRDComponent;
  let fixture: ComponentFixture<WorldClassRDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorldClassRDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorldClassRDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
