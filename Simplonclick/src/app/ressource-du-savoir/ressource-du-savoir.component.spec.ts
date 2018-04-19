import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RessourceDuSavoirComponent } from './ressource-du-savoir.component';

describe('RessourceDuSavoirComponent', () => {
  let component: RessourceDuSavoirComponent;
  let fixture: ComponentFixture<RessourceDuSavoirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RessourceDuSavoirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RessourceDuSavoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
