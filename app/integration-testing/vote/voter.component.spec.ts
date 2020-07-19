import { VoteComponent } from "./voter.component";
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

describe("vote component", () => {
  let component: VoteComponent;
  let fixture: ComponentFixture<VoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoteComponent]
    });

    fixture = TestBed.createComponent(VoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    //  fixture.nativeElement
    //  fixture.debugElement
  });

  it("should check if total vote in rendered", () => {
    component.othersVote = 20;
    component.myVote = 1;
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css(".vote-count"));
    let el: HTMLElement = de.nativeElement;

    expect(el.innerText).toContain(21);
  });

  it("should check if icon is hightlight", () => {
    component.myVote = 1;
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css(".glyphicon-menu-up"));

    expect(de.classes["highlighted"]).toBeTruthy();
  });

  it("should increase total vote when i click upvote button", () => {
    // arrange
    let de = fixture.debugElement.query(By.css(".glyphicon-menu-up"));

    // act
    de.triggerEventHandler("click", null);

    // assert
    expect(component.totalVotes).toBe(1);
  });
});
