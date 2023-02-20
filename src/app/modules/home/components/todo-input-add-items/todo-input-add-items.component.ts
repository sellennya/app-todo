import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-items',
  templateUrl: './todo-input-add-items.component.html',
  styleUrls: ['./todo-input-add-items.component.scss'],
})
export class TodoInputAddItemsComponent implements OnInit {
  @Output() public emitTaskToList = new EventEmitter();
  public addTaskToList: string = '';

  constructor() {}

  ngOnInit(): void {}

  public submitItemToList() {
    this.addTaskToList = this.addTaskToList.trim();
    if (this.addTaskToList) {
      this.emitTaskToList.emit(this.addTaskToList);
      this.addTaskToList = '';
    }
  }
}
