import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterDialogComponent } from './center-dialog.component';

describe('CenterDialogComponent', () => {
  let component: CenterDialogComponent;
  let fixture: ComponentFixture<CenterDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
