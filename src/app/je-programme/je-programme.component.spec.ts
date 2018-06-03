import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeProgrammeComponent } from './je-programme.component';

describe('JeProgrammeComponent', () => {
  let component: JeProgrammeComponent;
  let fixture: ComponentFixture<JeProgrammeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeProgrammeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
