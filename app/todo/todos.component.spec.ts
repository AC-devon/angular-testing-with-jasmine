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
  it("should set the message property if server return error", () => {
    // arrange
    let error = 'error from the server'
    let spy = spyOn(service, "add").and.returnValue(Observable.throw(error));

    // act
    component.add();

    // assert
    expect(component.message).toBe(error)
  });

  it("should call the server to delete item if user confimed", () => {
    // arrange
     spyOn(window, "confirm").and.returnValue(true);
    let spy = spyOn(service, "delete").and.returnValue(Observable.empty());

    // act
    component.delete(1);

    // assert
    expect(spy).toHaveBeenCalledWith(1);
  });

  it("should NOT call the server to delete item if user canceled", () => {
    // arrange
    let spy =  spyOn(window, "confirm").and.returnValue(false);

    // act
    component.delete(1);

    // assert
    expect(spy).not.toHaveBeenCalled();
  });
});
