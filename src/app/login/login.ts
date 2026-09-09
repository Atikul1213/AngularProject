import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NgIf,FormsModule, RouterLink, RouterOutlet],
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
    name: new FormControl('Atikul Islam',[Validators.required]),
    password: new FormControl('pass123',[Validators.required, Validators.minLength(5)]),
    email: new FormControl('example@gmail.com',
      [Validators.maxLength(15),Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])
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

  get nameError(){
    return this.profileForm.get('name');
  }

  get passwordError(){
    return this.profileForm.get('password');
  }

  get emailError(){
    return this.profileForm.get('email');
  }



  userDetails: any
  addDetails(val:NgForm){
    alert(`Form Submitted: ${JSON.stringify(val.value)}`);
    this.userDetails = val;
  }





}
