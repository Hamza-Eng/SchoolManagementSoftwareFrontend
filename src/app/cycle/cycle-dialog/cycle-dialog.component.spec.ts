import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CycleDialogComponent } from './cycle-dialog.component';

describe('CycleDialogComponent', () => {
  let component: CycleDialogComponent;
  let fixture: ComponentFixture<CycleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CycleDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CycleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
