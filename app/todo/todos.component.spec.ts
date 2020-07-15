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

  it("should call the server to add a new todo", () => {
    // arrange
    let spy = spyOn(service, "add").and.callFake(t => {
      return Observable.empty();
    });

    // act
    component.add();

    // assert
    expect(spy).toHaveBeenCalled();
  });
  it("should add the new todo return from the server", () => {
    // arrange
    let todo = { id: 1 };
    let spy = spyOn(service, "add").and.returnValue(Observable.from([todo]));

    // act
    component.add();

    // assert
    expect(spy).toHaveBeenCalled();
  });
});
