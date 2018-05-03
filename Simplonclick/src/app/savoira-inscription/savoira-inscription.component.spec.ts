import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavoiraInscriptionComponent } from './savoira-inscription.component';

describe('SavoiraInscriptionComponent', () => {
  let component: SavoiraInscriptionComponent;
  let fixture: ComponentFixture<SavoiraInscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavoiraInscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavoiraInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
