import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule }   from '@angular/forms';
import { HttpClientModule  }    from '@angular/common/http';

import { AppComponent } from './app.component';

import { TodoListComponent } from './todo-list.component';
import { TodoService } from './todo.service';
@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }