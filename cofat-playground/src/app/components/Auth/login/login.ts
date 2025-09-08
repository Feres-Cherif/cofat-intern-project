  import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators  } from '@angular/forms';

  @Component({
    selector: 'app-login',
    standalone: true,
    imports: [ReactiveFormsModule,CommonModule],
    templateUrl: './login.html',
    styleUrls: ['./login.css']
  })
  export class Login {
    loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),      
      password: new FormControl('')    
  });

  onSubmit() {
    console.log('Formulaire :', this.loginForm.value);
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  }
