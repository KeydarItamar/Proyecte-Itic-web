import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErasmusPolicyComponent } from './erasmus-policy.component';

describe('ErasmusPolicyComponent', () => {
  let component: ErasmusPolicyComponent;
  let fixture: ComponentFixture<ErasmusPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErasmusPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErasmusPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
