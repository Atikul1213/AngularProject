import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncDecCounter } from './inc-dec-counter';

describe('IncDecCounter', () => {
  let component: IncDecCounter;
  let fixture: ComponentFixture<IncDecCounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncDecCounter],
    }).compileComponents();

    fixture = TestBed.createComponent(IncDecCounter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
