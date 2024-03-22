import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiclesFormatiusGrauMitjaComponent } from './cicles-formatius-grau-mitja.component';

describe('CiclesFormatiusGrauMitjaComponent', () => {
  let component: CiclesFormatiusGrauMitjaComponent;
  let fixture: ComponentFixture<CiclesFormatiusGrauMitjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiclesFormatiusGrauMitjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiclesFormatiusGrauMitjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
