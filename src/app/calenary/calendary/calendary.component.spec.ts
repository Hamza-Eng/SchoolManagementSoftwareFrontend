import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendaryComponent } from './calendary.component';

describe('CalendaryComponent', () => {
  let component: CalendaryComponent;
  let fixture: ComponentFixture<CalendaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
