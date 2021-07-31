import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerallocationComponent } from './trainerallocation.component';

describe('TrainerallocationComponent', () => {
  let component: TrainerallocationComponent;
  let fixture: ComponentFixture<TrainerallocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerallocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerallocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
