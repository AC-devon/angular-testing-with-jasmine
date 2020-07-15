import { TodosComponent } from "./todos.component";
import { TodoService } from "./todo.service";
import { Observable } from "rxjs";

describe("TodosComponent", () => {
  let component: TodosComponent;
  let service: TodoService;
  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it("should return todo list from the server", () => {
    // arrange
    spyOn(service, "getTodos").and.callFake(() => {
      return Observable.from([[1, 2, 3]]);
    });

    // act
    component.ngOnInit();

    // assert
    expect(component.todos.length).toBeGreaterThan(0);
  });
});
