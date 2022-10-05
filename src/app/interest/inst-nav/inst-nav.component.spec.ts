import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstNavComponent } from './inst-nav.component';

describe('InstNavComponent', () => {
  let component: InstNavComponent;
  let fixture: ComponentFixture<InstNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
