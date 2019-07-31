import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFocus: string = 'Hannah njeri';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus course',3),
    new Task('Begin brainstorming possible JavaScript group projects',2),
    new Task('Add README file to last few Angular repos on GitHub',2)
  ];
  selectedTask = null;
  editTask(clickedTask) {
    this.selectedTask = clickedTask;
    alert("You just requested to edit a Task!!");
  }
  finishedEditing() {
    this.selectedTask = null;
  }
  priorityColor(currentTask){
    if (currentTask.priority === 3){
      return "bg-danger";
    } else if (currentTask.priority === 2) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }
}  
 
},
export class Task {
  public done: boolean = false;
  constructor(public description: string) { }

}
