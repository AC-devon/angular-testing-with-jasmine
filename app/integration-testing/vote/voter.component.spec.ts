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
    component.othersVote = 21;
    component.myVote = 1;
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css(".vote-count"));
    let el: HTMLElement = de.nativeElement;

    expect(el.innerText).toContain(21);
  });
});
