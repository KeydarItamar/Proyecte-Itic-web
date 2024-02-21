import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilitatAlumnatComponent } from './mobilitat-alumnat.component';

describe('MobilitatAlumnatComponent', () => {
  let component: MobilitatAlumnatComponent;
  let fixture: ComponentFixture<MobilitatAlumnatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilitatAlumnatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilitatAlumnatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
