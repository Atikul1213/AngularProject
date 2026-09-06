import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink, RouterOutlet],
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

   users=[
    { id:1,name:'Atikul Islam', Dept:'CSE', Age: 25 },
    { id:2,name:'John Doe', Dept:'ECE', Age: 30 },
    { id:3,name:'Jane Smith', Dept:'ME', Age: 28 },
    { id:4,name:'Michael Johnson', Dept:'CE', Age: 35 },
    { id:5,name:'Emily Davis', Dept:'EE', Age: 22 },
    { id:6,name:'David Wilson', Dept:'CSE', Age: 27 },
  ]


  name = new FormControl('Atikul Islam');
  password = new FormControl('pass123');
  email = new FormControl('example@gmail.com');

  displayValue(){
    alert(`Name: ${this.name.value}, Password: ${this.password.value}`);  
  }


  profileForm = new FormGroup({
    name: new FormControl('Atikul Islam'),
    password: new FormControl('pass123'),
    email: new FormControl('example@gmail.com')
  })

  onSubmit(){
    alert(`Form Submitted: ${JSON.stringify(this.profileForm.value)}`);
  }
  
  setValue(){
    this.profileForm.setValue({
      name: 'John Doe',
      password: 'newpass456',
      email: 'john.doe@gmail.com'
    })
  }


}
