import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MainFrameComponent } from './mainFrame.component';

describe('DashboardComponent', () => {
  let component: MainFrameComponent;
  let fixture: ComponentFixture<MainFrameComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MainFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
