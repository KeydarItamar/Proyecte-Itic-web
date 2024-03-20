import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnSomComponent } from './on-som.component';

describe('OnSomComponent', () => {
  let component: OnSomComponent;
  let fixture: ComponentFixture<OnSomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnSomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnSomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
