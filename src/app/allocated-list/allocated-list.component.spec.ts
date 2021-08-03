import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocatedListComponent } from './allocated-list.component';

describe('AllocatedListComponent', () => {
  let component: AllocatedListComponent;
  let fixture: ComponentFixture<AllocatedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllocatedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocatedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
