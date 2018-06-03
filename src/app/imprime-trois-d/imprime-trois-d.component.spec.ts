import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimeTroisDComponent } from './imprime-trois-d.component';

describe('ImprimeTroisDComponent', () => {
  let component: ImprimeTroisDComponent;
  let fixture: ComponentFixture<ImprimeTroisDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimeTroisDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimeTroisDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
