import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiclesFormatiusComponent } from './cicles-formatius.component';

describe('CiclesFormatiusComponent', () => {
  let component: CiclesFormatiusComponent;
  let fixture: ComponentFixture<CiclesFormatiusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiclesFormatiusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiclesFormatiusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
