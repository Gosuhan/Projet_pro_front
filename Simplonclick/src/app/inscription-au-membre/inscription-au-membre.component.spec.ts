import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionAuMembreComponent } from './inscription-au-membre.component';

describe('InscriptionAuMembreComponent', () => {
  let component: InscriptionAuMembreComponent;
  let fixture: ComponentFixture<InscriptionAuMembreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptionAuMembreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionAuMembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
