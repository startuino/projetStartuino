import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeModeliseComponent } from './je-modelise.component';

describe('JeModeliseComponent', () => {
  let component: JeModeliseComponent;
  let fixture: ComponentFixture<JeModeliseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeModeliseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeModeliseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
