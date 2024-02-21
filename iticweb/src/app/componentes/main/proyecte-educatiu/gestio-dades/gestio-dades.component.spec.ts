import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioDadesComponent } from './gestio-dades.component';

describe('GestioDadesComponent', () => {
  let component: GestioDadesComponent;
  let fixture: ComponentFixture<GestioDadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestioDadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioDadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
