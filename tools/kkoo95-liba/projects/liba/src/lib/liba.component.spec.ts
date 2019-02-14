import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibaComponent } from './liba.component';

describe('LibaComponent', () => {
  let component: LibaComponent;
  let fixture: ComponentFixture<LibaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
