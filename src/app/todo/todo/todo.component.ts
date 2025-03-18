import { Component } from "@angular/core";
import { Todo } from "../model/todo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],

})
export class TodoComponent {
  todos: Todo[] = [];
  todo = new Todo();
  constructor() {}
}
