import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTrigger } from './event-trigger';

describe('EventTrigger', () => {
  let component: EventTrigger;
  let fixture: ComponentFixture<EventTrigger>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventTrigger],
    }).compileComponents();

    fixture = TestBed.createComponent(EventTrigger);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
