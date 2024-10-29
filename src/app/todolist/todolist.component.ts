import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css',
})
export class TodolistComponent {
  public todo: string = '';
  public message: string = '';
  public ismessage: boolean = false;
  public alltodo: string[] = [];
  showmessage() {
    this.ismessage = true;
    setTimeout(() => {
      this.message = '';
    }, 2000);
  }
  addtodo() {
    console.log('you clicked me');
    console.log(this.todo);

    if ((this.todo = '')) {
      this.message = 'Input Cannot be empty';
      this.showmessage();
      return;
    }
    if (this.todo == 'duplicated') {
      this.message = 'Duplicate value not allowed';
      this.showmessage();
      return;
    }
    // if (this.todo.length < 7) {
    //   this.message = 'todo too short';
    //   this.showmessage();
    //   return;
    // }
    this.alltodo.push(this.todo);
    this.message = 'Added Successfully';
    console.log(this.alltodo);
  }
}
