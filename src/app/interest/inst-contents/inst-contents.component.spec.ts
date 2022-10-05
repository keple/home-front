import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstContentsComponent } from './inst-contents.component';

describe('InstContentsComponent', () => {
  let component: InstContentsComponent;
  let fixture: ComponentFixture<InstContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstContentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
