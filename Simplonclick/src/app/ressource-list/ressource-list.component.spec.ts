import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RessourceListComponent } from './ressource-list.component';

describe('RessourceListComponent', () => {
  let component: RessourceListComponent;
  let fixture: ComponentFixture<RessourceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RessourceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RessourceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
