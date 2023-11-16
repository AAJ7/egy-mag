import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisruptiveTechnologyComponent } from './disruptive-technology.component';

describe('DisruptiveTechnologyComponent', () => {
  let component: DisruptiveTechnologyComponent;
  let fixture: ComponentFixture<DisruptiveTechnologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisruptiveTechnologyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisruptiveTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
