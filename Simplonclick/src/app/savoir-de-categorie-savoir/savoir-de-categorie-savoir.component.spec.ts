import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavoirDeCategorieSavoirComponent } from './savoir-de-categorie-savoir.component';

describe('SavoirDeCategorieSavoirComponent', () => {
  let component: SavoirDeCategorieSavoirComponent;
  let fixture: ComponentFixture<SavoirDeCategorieSavoirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavoirDeCategorieSavoirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavoirDeCategorieSavoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
