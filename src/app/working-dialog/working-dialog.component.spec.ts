import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingDialogComponent } from './working-dialog.component';

describe('WorkingDialogComponent', () => {
  let component: WorkingDialogComponent;
  let fixture: ComponentFixture<WorkingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
