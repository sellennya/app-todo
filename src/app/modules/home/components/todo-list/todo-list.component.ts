import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements DoCheck {
  public taskList: Array<TaskList> = JSON.parse(
    localStorage.getItem('list') || '[]'
  );
  constructor() {}

  ngDoCheck(): void {
    this.setLocalstorage();
  }

  public deleteTask(i: number) {
    this.taskList.splice(i, 1);
  }

  public deleteAll() {
    const confirm = window.confirm('Do you really want to delete all tasks?');
    if (confirm) {
      this.taskList = [];
    }
  }

  public setEmitTaskList(event: string) {
    this.taskList.push({ task: event, checked: false });
  }

  public validateList(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm('Empty task, do you want to delele?');

      if (confirm) {
        this.deleteTask(index);
      }
    }
  }

  public setLocalstorage() {
    if (this.taskList) {
      this.taskList.sort((a, b) => Number(a.checked) - Number(b.checked));
      localStorage.setItem('list', JSON.stringify(this.taskList));
    }
  }
}
