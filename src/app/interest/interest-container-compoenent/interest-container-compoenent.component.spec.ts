import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestContainerCompoenentComponent } from './interest-container-compoenent.component';

describe('InterestContainerCompoenentComponent', () => {
  let component: InterestContainerCompoenentComponent;
  let fixture: ComponentFixture<InterestContainerCompoenentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestContainerCompoenentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterestContainerCompoenentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
