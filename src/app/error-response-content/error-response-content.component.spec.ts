import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ErrorResponseContentComponent } from './error-response-content.component';

describe('ErrorResponseContentComponent', () => {
  let component: ErrorResponseContentComponent;
  let fixture: ComponentFixture<ErrorResponseContentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorResponseContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorResponseContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
