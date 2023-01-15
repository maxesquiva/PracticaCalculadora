import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperBotonComponent } from './super-boton.component';

describe('SuperBotonComponent', () => {
  let component: SuperBotonComponent;
  let fixture: ComponentFixture<SuperBotonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperBotonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperBotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
