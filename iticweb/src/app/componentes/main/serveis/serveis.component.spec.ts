import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeisComponent } from './serveis.component';

describe('ServeisComponent', () => {
  let component: ServeisComponent;
  let fixture: ComponentFixture<ServeisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServeisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
