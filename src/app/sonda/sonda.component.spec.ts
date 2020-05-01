import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SondaComponent } from './sonda.component';

describe('SondaComponent', () => {
  let component: SondaComponent;
  let fixture: ComponentFixture<SondaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SondaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SondaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
