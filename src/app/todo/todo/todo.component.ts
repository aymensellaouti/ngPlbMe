import { Component, inject } from "@angular/core";
import { Todo } from "../model/todo";
import { TodoService } from "../service/todo.service";
import { TodoDto } from "../dto/todos.dto";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  // providers: [TodoService]
})
export class TodoComponent {
  todos: Todo[] = [];
  todo = new Todo();
  todosDto: TodoDto[] = [];
  todoService = inject(TodoService);
  constructor() {
    this.todos = this.todoService.getTodos();
    this.todoService.getTodosFromApi().subscribe({
      next: (todosFromApi) => {
        this.todosDto = todosFromApi
      },
      error: (erreur) => {
        console.log({erreur});
      },
      complete: () => {
        console.log("J'ai bien fini de récupérer les données de mon API");

      }
    })
  }
  addTodo() {
    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
  }
  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
