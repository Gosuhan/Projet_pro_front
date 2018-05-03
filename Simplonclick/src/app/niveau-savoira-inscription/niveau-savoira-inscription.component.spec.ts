import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiveauSavoiraInscriptionComponent } from './niveau-savoira-inscription.component';

describe('NiveauSavoiraInscriptionComponent', () => {
  let component: NiveauSavoiraInscriptionComponent;
  let fixture: ComponentFixture<NiveauSavoiraInscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiveauSavoiraInscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiveauSavoiraInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
