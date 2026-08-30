import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IncDecCounter } from './inc-dec-counter/inc-dec-counter';
 
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IncDecCounter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app');
}
