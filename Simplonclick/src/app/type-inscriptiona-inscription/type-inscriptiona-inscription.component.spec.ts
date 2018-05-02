import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeInscriptionaInscriptionComponent } from './type-inscriptiona-inscription.component';

describe('TypeInscriptionaInscriptionComponent', () => {
  let component: TypeInscriptionaInscriptionComponent;
  let fixture: ComponentFixture<TypeInscriptionaInscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeInscriptionaInscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeInscriptionaInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
