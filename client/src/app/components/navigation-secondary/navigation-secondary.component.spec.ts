import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationSecondaryComponent } from './navigation-secondary.component';

describe('NavigationSecondaryComponent', () => {
  let component: NavigationSecondaryComponent;
  let fixture: ComponentFixture<NavigationSecondaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationSecondaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
