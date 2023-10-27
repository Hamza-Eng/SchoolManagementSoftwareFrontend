import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiveauxComponent } from './niveaux.component';

describe('NiveauxComponent', () => {
  let component: NiveauxComponent;
  let fixture: ComponentFixture<NiveauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NiveauxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NiveauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
