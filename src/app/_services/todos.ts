import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { TodoModel } from '../_models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<TodoModel[]> {
    return this.http.get<TodoModel[]>(`${this.baseUrl}/todos`).pipe(map((response) => response));
  }

  getById(id: number): Observable<TodoModel> {
    return this.http
      .get<TodoModel>(`${this.baseUrl}/todos/${id}`)
      .pipe(map((response) => response));
  }
}
