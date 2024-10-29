import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-onetodo',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './onetodo.component.html',
  styleUrl: './onetodo.component.css',
})
export class OnetodoComponent {
  constructor(public param_router: ActivatedRoute) {}
  public userStorage: object[] = JSON.parse(localStorage.getItem('signuser')!);
  public details: string = '';
  public signleinfo: any;
  // public details: string = this.param_router.snapshot.params['id'];
  ngOnInit() {
    console.log(this.param_router.snapshot.params);
    console.log(this, this.userStorage);
    this.details = this.param_router.snapshot.params['id'];
    this.signleinfo = this.userStorage.find(
      (el: any) => el.email == this.details
    );
    console.log(this.signleinfo);
  }
}
