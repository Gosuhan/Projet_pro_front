import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembreDeSavoirComponent } from './membre-de-savoir.component';

describe('MembreDeSavoirComponent', () => {
  let component: MembreDeSavoirComponent;
  let fixture: ComponentFixture<MembreDeSavoirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembreDeSavoirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembreDeSavoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
