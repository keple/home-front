import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPortfolioManagementComponent } from './admin-portfolio-management.component';

describe('AdminPortfolioManagementComponent', () => {
  let component: AdminPortfolioManagementComponent;
  let fixture: ComponentFixture<AdminPortfolioManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPortfolioManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPortfolioManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
