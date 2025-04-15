import { Component, Pipe } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './pages/todo/todo.component';
import { Todo } from './models/todo';
import { TODO_DATA } from '../assets/todo';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  todos:Array<Todo>
  constructor(){
    this.todos= TODO_DATA
  }
  
  getData(val:Todo){
    Swal.fire({
      icon: 'warning',
      title: 'Esta segura de eliminar la siguiente actividad?',
      text: val.title,
      showCancelButton: true,
      confirmButtonText: "Si",
    }).then( result=>{
      if(result.isConfirmed){
        this.todos= this.todos.filter(t=> t.id!==val.id)
      }
    }
    )
    console.log(val)
    
  }

  ordetBy(){
    this.todos.sort((a,b)=> a.priority-b.priority)
  }
}
