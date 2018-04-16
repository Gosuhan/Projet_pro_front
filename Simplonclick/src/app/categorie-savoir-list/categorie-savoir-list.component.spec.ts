import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieSavoirListComponent } from './categorie-savoir-list.component';

describe('CategorieSavoirListComponent', () => {
  let component: CategorieSavoirListComponent;
  let fixture: ComponentFixture<CategorieSavoirListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorieSavoirListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieSavoirListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
