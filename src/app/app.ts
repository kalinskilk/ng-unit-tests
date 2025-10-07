import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { forkJoin } from 'rxjs';
import { TodosService } from './_services/todos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('ng-unit-tests');

  constructor(private todoService: TodosService) {}

  ngOnInit() {
    forkJoin({
      todoAll: this.todoService.getAll(),
      todoById: this.todoService.getById(1),
    }).subscribe((result) => {
      console.log(result.todoAll);
      console.log(result.todoById);
    });
  }
}
