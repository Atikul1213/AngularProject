import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IncDecCounter } from './inc-dec-counter/inc-dec-counter';
import { EventTrigger } from './event-trigger/event-trigger';
 
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EventTrigger, IncDecCounter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app');
}
