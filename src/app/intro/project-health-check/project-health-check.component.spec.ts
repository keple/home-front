import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProjectHealthCheckComponent } from './project-health-check.component';

describe('ProjectHealthCheckComponent', () => {
  let component: ProjectHealthCheckComponent;
  let fixture: ComponentFixture<ProjectHealthCheckComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectHealthCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectHealthCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
