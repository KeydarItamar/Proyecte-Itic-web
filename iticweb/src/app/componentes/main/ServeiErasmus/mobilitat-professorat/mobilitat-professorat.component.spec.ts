import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilitatProfessoratComponent } from './mobilitat-professorat.component';

describe('MobilitatProfessoratComponent', () => {
  let component: MobilitatProfessoratComponent;
  let fixture: ComponentFixture<MobilitatProfessoratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilitatProfessoratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilitatProfessoratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
