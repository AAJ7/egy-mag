import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAndValuesComponent } from './team-and-values.component';

describe('TeamAndValuesComponent', () => {
  let component: TeamAndValuesComponent;
  let fixture: ComponentFixture<TeamAndValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamAndValuesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamAndValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
