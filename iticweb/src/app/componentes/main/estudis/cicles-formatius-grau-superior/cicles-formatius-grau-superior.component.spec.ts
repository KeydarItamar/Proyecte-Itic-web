import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiclesFormatiusGrauSuperiorComponent } from './cicles-formatius-grau-superior.component';

describe('CiclesFormatiusGrauSuperiorComponent', () => {
  let component: CiclesFormatiusGrauSuperiorComponent;
  let fixture: ComponentFixture<CiclesFormatiusGrauSuperiorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiclesFormatiusGrauSuperiorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiclesFormatiusGrauSuperiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
