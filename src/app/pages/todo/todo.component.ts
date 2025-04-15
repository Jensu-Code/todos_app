import { Component, input, LOCALE_ID, output } from '@angular/core';
import { Priority, PriorityText, Range, RangeText, Todo } from '../../models/todo';
import { CommonModule, registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es-PE'
registerLocaleData(es)
@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
  providers: [{
     provide: LOCALE_ID, useValue: 'es-PE'
  }]
})
export class TodoComponent {
    todo = input.required<Todo>({})
    first = input<boolean>()
    last = input<boolean>()
    odd = input<boolean>()
    even = input<boolean>()
    isOnclick = output<Todo>()
    get priority():string{
      switch(this.todo().priority){
        case Priority.LOW:
          return PriorityText.LOW;
        case Priority.MEDIUM:
          return PriorityText.MEDIUM
        default:
          return PriorityText.HIGH
      }
    }

    get progress ():number{
      return this.todo().progress*100
    } 

    get range() {
      if (this.progress >= 0 && this.progress <= Range.LOW) {
        return RangeText.LOW;
      } else if (this.progress > Range.LOW && this.progress <= Range.MEDIUM) {
        return RangeText.MEDIUM;
      }
  
      return RangeText.HIGH;
    } 
}
