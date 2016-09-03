import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { routing } from './app.routes';



@NgModule({
  imports: [BrowserModule, routing],
  declarations: [AppComponent, TodoComponent],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
