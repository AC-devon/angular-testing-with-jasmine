
import { VoteComponent } from "./voter.component"
import { TestBed, ComponentFixture } from "@angular/core/testing"

describe('vote component', () =>{
  let component: VoteComponent;
  let fixture: ComponentFixture<VoteComponent>
  
  beforeEach(() =>{
    TestBed.configureTestingModule({
      declarations:[VoteComponent]
    })

   fixture = TestBed.createComponent(VoteComponent);
   component = fixture.componentInstance;

  //  fixture.nativeElement
  //  fixture.debugElement
  })
})