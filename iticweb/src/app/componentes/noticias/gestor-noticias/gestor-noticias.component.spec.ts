import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorNoticiasComponent } from './gestor-noticias.component';

describe('GestorNoticiasComponent', () => {
  let component: GestorNoticiasComponent;
  let fixture: ComponentFixture<GestorNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestorNoticiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestorNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
