import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { FIFTEEN_TODO, TODOS_DATA } from '../../../db-data/db-data';
import { environment } from '../../environments/environment.development';
import { TodosService } from './todos';

describe('Todos', () => {
  let service: TodosService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodosService, provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(TodosService);

    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be load all TODOS', (done) => {
    service.getAll().subscribe((result) => {
      expect(result).toBeTruthy();
      expect(result.length).toEqual(200);

      const fifteenTodo = result.find((el) => el.id === 15);
      expect(fifteenTodo).toBeDefined();
      expect(fifteenTodo?.title).toEqual('ab voluptatum amet voluptas');

      done();
    });

    const req = httpTestingController.expectOne(environment.apiUrl + '/todos');
    expect(req.request.method).toBe('GET');
    req.flush(TODOS_DATA);
  });

  it('should be load TODO by id ', (done) => {
    service.getById(15).subscribe((result) => {
      expect(result).toBeTruthy();
      expect(result.id).toBe(15);
      expect(result?.title).toEqual('ab voluptatum amet voluptas');
      done();
    });

    const req = httpTestingController.expectOne(environment.apiUrl + '/todos/15');
    expect(req.request.method).toBe('GET');
    req.flush(FIFTEEN_TODO);
  });
});
