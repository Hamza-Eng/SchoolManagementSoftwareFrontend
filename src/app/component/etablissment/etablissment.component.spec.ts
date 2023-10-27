import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtablissmentComponent } from './etablissment.component';

describe('EtablissmentComponent', () => {
  let component: EtablissmentComponent;
  let fixture: ComponentFixture<EtablissmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtablissmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtablissmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
