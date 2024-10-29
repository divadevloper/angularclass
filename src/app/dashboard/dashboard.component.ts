import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  constructor(public router: Router) {}
  public name: string = '';
  // public user:object = JSON
  public existingUsers: { username: string } = JSON.parse(
    localStorage.getItem('loginuser')!
  );

  // if (existingUsers:any == '') {
  //   this.router.navigate(['/login']);
  // }

  logout() {
    this.router.navigate(['./login']);
  }
}
