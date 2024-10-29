import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [FormsModule, NavbarComponent, RouterModule, CommonModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css',
})
export class SignupFormComponent {
  constructor(public router: Router) {}
  signuser: any[] = JSON.parse(localStorage.getItem('signuser')!) || [];

  signuserObj: any = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  public message: string = '';
  public errors: boolean = false;
  showmessage() {
    this.errors = true;
    setTimeout(() => {
      this.message = '';
    }, 2000);
  }
  submitform() {
    //
    // Username validation
    if (!this.signuserObj.username.trim()) {
      this.message = 'Username is required';
      this.showmessage();
      return;
    } else if (this.signuserObj.username.length < 3) {
      this.message = 'Username must be at least 3 characters';
      this.showmessage();
      return;
    }

    // Email validation
    const userExists = this.signuser.find(
      (user: any) => user.email === this.signuserObj.email
    );
    if (userExists) {
      this.message = 'Email already exists';
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!this.signuserObj.email.trim()) {
      this.message = 'Email is required';
      this.showmessage();
      return;
    } else if (!emailPattern.test(this.signuserObj.email)) {
      this.message = 'Please enter a valid email';
      this.showmessage();
      return;
    }

    // Password validation
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    if (!this.signuserObj.password.trim()) {
      this.message = 'Password is required';
      this.showmessage();
      return;
    } else if (!passwordRegex.test(this.signuserObj.password)) {
      this.message =
        'Password must have at least one lowercase, one uppercase, one special character, and a number';
      this.showmessage();
      return;
    } else if (this.signuserObj.password.length < 6) {
      this.message = 'Password must be at least 6 characters long';
      this.showmessage();
      return;
    }

    // Confirm password validation
    if (!this.signuserObj.confirmPassword.trim()) {
      this.message = 'Confirm Password is required';
      this.showmessage();
      return;
    } else if (this.signuserObj.password !== this.signuserObj.confirmPassword) {
      this.message = 'Passwords do not match';
      this.showmessage();
      return;
    }
    //
    this.signuser.push(this.signuserObj);
    this.message = 'Registration successful';
    this.showmessage();
    console.log(this.signuser);

    // Store the signup data to localStorage
    localStorage.setItem('signuser', JSON.stringify(this.signuser));
    this.router.navigate(['/login']);
  }
}
