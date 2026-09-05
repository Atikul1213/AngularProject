import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  constructor(private router: Router) {

  }
  goToAbout() {
    this.router.navigate(['/about', {
      name: 'Atikul Islam',
      Dept: 'CSE'
    }]);
  }

  goToAbout1() {
    this.router.navigate(['/about', { 
      queryParams: { 
        name: 'Atikul Islam', Dept: 'CSE' 
      }
   }]);
  }
}
