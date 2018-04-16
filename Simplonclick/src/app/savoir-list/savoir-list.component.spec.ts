import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavoirListComponent } from './savoir-list.component';

describe('SavoirListComponent', () => {
  let component: SavoirListComponent;
  let fixture: ComponentFixture<SavoirListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavoirListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavoirListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
