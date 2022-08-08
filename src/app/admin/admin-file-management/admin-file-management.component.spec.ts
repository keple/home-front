import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFileManagementComponent } from './admin-file-management.component';

describe('AdminFileManagementComponent', () => {
  let component: AdminFileManagementComponent;
  let fixture: ComponentFixture<AdminFileManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFileManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminFileManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
