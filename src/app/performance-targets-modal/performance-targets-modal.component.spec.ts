import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceTargetsModalComponent } from './performance-targets-modal.component';

describe('PerformanceTargetsModalComponent', () => {
  let component: PerformanceTargetsModalComponent;
  let fixture: ComponentFixture<PerformanceTargetsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceTargetsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceTargetsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
