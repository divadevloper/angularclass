import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(public router: Router) {}
  loginUserObj: any = {
    email: '',
    password: '',
  };
  public message: string = '';
  public errors: boolean = false;
  showmessage() {
    this.errors = true;
    setTimeout(() => {
      this.message = '';
    }, 2000);
  }
  loginuser() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!this.loginUserObj.email.trim()) {
      this.message = 'Email is required';
      this.showmessage();
      return;
    } else if (!emailPattern.test(this.loginUserObj.email)) {
      this.message = 'Please enter a valid email';
      this.showmessage();
      return;
    }

    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    if (!this.loginUserObj.password.trim()) {
      this.message = 'Password is required';
      this.showmessage();
      return;
    } else if (!passwordRegex.test(this.loginUserObj.password)) {
      this.message =
        'Password must have at least one lowercase, one uppercase, one special character, and a number';
      this.showmessage();
      return;
    } else if (this.loginUserObj.password.length < 6) {
      this.message = 'Password must be at least 6 characters long';
      this.showmessage();
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem('signuser')!);
    const signupUser = existingUsers.find(
      (user: any) =>
        user.email === this.loginUserObj.email &&
        user.password === this.loginUserObj.password
    );

    if (signupUser) {
      this.message = 'Login sucessfully redirecting....';
      this.showmessage();
      localStorage.setItem('loginuser', JSON.stringify(signupUser));
      setTimeout(() => {
        this.router.navigate(['/dashboard']);
      }, 2000);
    } else {
      this.message = "User doesn't exist....";
      this.showmessage();
    }
  }
}
