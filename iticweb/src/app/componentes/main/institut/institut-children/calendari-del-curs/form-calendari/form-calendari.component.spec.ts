import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCalendariComponent } from './form-calendari.component';

describe('FormCalendariComponent', () => {
  let component: FormCalendariComponent;
  let fixture: ComponentFixture<FormCalendariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCalendariComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCalendariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
