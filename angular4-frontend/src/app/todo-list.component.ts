import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
	todos: Todo[];
	newTodo: Todo = new Todo();

	constructor(
	  private todoService: TodoService,
	) {}

	ngOnInit(): void {
		this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos()
      .then(todos => this.todos = todos );  	
  }

  createTodo(todoForm: NgForm): void {
    this.todoService.createTodo(this.newTodo)
      .then(createTodo => {        
        todoForm.reset();
	      this.newTodo = new Todo();
	      this.todos.unshift(createTodo)
      });
  }

  deleteTodo(id: string): void {
  	this.todoService.deleteTodo(id)
  	.then(() => {
  		this.todos = this.todos.filter(todo => todo.id != id);
  	});
  }

  updateTodo(todoData: Todo): void {
  	this.todoService.updateTodo(todoData)
  	.then(updatedTodo => {
  		let existingTodo = this.todos.find(todo => todo.id === updatedTodo.id);
  		Object.assign(existingTodo, updatedTodo);
  	});
  }

  toggleCompleted(todoData: Todo): void {
    todoData.completed = !todoData.completed;
    this.todoService.updateTodo(todoData)
    .then(updatedTodo => {
      let existingTodo = this.todos.find(todo => todo.id === updatedTodo.id);
      Object.assign(existingTodo, updatedTodo);
    });
  }
}
