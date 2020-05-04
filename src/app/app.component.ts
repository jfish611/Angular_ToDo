import { Component } from '@angular/core';
import {ToDo} from './Interfaces/ToDos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  todoTask:string;

  title = 'Angular App #1 To-Do';
  ToDos: ToDo[] = [
    {
      task: "Take Rafi to the park",
      completed: true,
      editing: false,
    },
    {
      task: "Daily Daf Yomi",
      completed: true,
      editing: false,
    },
    {
      task: "Work on Angular stuff",
      completed: false,
      editing: false,
    }
    
  ]

  // displayCongratulations(){

  // }

  // searchTasks(input:string){
  //   let filteredTasks = this.ToDos.filter(fa){
  //     task.contains(input)
  //   }
  // }

  addToDo(){
    if(this.todoTask.length===0){
      return;
    }
   this.ToDos.push({
      task: this.todoTask,
      completed: false,
      editing: false,
    })
    this.todoTask='';
  }

completeToDo(a:ToDo){ 
a.completed=true;
}

editToDo(a:ToDo):void{
  a.editing=!a.editing
}
 
deleteToDo(a:number):void{
  console.log('got to deleteToDo:',a);
  this.ToDos.splice(a,1)

}
}



