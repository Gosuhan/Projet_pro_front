import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RessourceAuSavoirComponent } from './ressource-au-savoir.component';

describe('RessourceAuSavoirComponent', () => {
  let component: RessourceAuSavoirComponent;
  let fixture: ComponentFixture<RessourceAuSavoirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RessourceAuSavoirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RessourceAuSavoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
