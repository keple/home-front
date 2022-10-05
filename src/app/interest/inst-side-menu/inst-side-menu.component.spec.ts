import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstSideMenuComponent } from './inst-side-menu.component';

describe('InstSideMenuComponent', () => {
  let component: InstSideMenuComponent;
  let fixture: ComponentFixture<InstSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstSideMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
