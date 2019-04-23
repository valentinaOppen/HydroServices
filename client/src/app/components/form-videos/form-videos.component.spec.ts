import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVideosComponent } from './form-videos.component';

describe('FormVideosComponent', () => {
  let component: FormVideosComponent;
  let fixture: ComponentFixture<FormVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
