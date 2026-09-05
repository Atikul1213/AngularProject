import { Component, signal } from '@angular/core';
import { IncDecCounter } from './inc-dec-counter/inc-dec-counter';
import { EventTrigger } from './event-trigger/event-trigger';
import { HeaderComponent } from './header/header';
import { RouterLink, RouterOutlet } from '@angular/router';
 
@Component({
  selector: 'app-root',
  imports: [RouterLink,RouterOutlet, EventTrigger, IncDecCounter, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app');
}
