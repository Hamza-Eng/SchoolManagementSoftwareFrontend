import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiliersComponent } from './filiers.component';

describe('FiliersComponent', () => {
  let component: FiliersComponent;
  let fixture: ComponentFixture<FiliersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiliersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
