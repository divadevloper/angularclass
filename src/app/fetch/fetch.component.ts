import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fetch',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './fetch.component.html',
  styleUrl: './fetch.component.css',
})
export class FetchComponent {
  constructor(public http: HttpClient) {}

  ngOnInit() {
    this.fecthUser();
  }

  fecthUser() {
    this.http.get('https://dummyjson.com/users').subscribe((res) => {
      console.log(res);
    });
  }
}
