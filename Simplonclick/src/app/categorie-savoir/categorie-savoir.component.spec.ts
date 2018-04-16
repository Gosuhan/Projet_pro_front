import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieSavoirComponent } from './categorie-savoir.component';

describe('CategorieSavoirComponent', () => {
  let component: CategorieSavoirComponent;
  let fixture: ComponentFixture<CategorieSavoirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorieSavoirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieSavoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
