import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilDelcontractanComponent } from './perfil-delcontractan.component';

describe('PerfilDelcontractanComponent', () => {
  let component: PerfilDelcontractanComponent;
  let fixture: ComponentFixture<PerfilDelcontractanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilDelcontractanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilDelcontractanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
