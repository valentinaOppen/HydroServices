import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewsIndexComponent } from './admin-news-index.component';

describe('AdminNewsIndexComponent', () => {
  let component: AdminNewsIndexComponent;
  let fixture: ComponentFixture<AdminNewsIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNewsIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
