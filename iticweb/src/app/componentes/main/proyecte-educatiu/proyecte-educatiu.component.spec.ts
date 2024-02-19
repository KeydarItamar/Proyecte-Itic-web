import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyecteEducatiuComponent } from './proyecte-educatiu.component';

describe('ProyecteEducatiuComponent', () => {
  let component: ProyecteEducatiuComponent;
  let fixture: ComponentFixture<ProyecteEducatiuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyecteEducatiuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyecteEducatiuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
