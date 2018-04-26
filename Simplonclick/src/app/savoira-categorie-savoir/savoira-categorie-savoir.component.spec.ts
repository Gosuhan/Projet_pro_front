import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavoiraCategorieSavoirComponent } from './savoira-categorie-savoir.component';

describe('SavoiraCategorieSavoirComponent', () => {
  let component: SavoiraCategorieSavoirComponent;
  let fixture: ComponentFixture<SavoiraCategorieSavoirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavoiraCategorieSavoirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavoiraCategorieSavoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
