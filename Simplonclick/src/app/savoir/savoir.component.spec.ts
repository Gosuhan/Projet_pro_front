import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavoirComponent } from './savoir.component';

describe('SavoirComponent', () => {
  let component: SavoirComponent;
  let fixture: ComponentFixture<SavoirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavoirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
