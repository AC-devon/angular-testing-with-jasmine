import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import { Observable } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;
  beforeEach(() => {
    component = new TodosComponent(service)
    service = new TodoService(null);
  });

  it('should return todo list from the server', () => {
    spyOn(service, 'getTodos').and.callFake(() =>{
      //return Observable.from([ [1,2,3] ])
    })
  });

  component.ngOnInit()

  expect(component.todos.length).toBeGreaterThan(0)
});