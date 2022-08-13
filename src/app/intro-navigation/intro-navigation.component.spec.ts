import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroNavigationComponent } from './intro-navigation.component';

describe('IntroNavigationComponent', () => {
  let component: IntroNavigationComponent;
  let fixture: ComponentFixture<IntroNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
