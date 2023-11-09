import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentDialogComponent } from './establishment-dialog.component';

describe('EstablishmentDialogComponent', () => {
  let component: EstablishmentDialogComponent;
  let fixture: ComponentFixture<EstablishmentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstablishmentDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstablishmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
