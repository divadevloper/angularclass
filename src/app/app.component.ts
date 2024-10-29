import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { SectiontwoComponent } from './sectiontwo/sectiontwo.component';
import { SectionthreeComponent } from './sectionthree/sectionthree.component';
import { FooterComponent } from './footer/footer.component';
import { TodolistComponent } from './todolist/todolist.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LandingComponent,
    SectiontwoComponent,
    SectionthreeComponent,
    FooterComponent,
    TodolistComponent,
    SignupFormComponent,
    NavbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angularclass';
}
