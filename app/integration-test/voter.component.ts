import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "my-voter",
  template: `
    <div class="voter">
      <i
        class="glyphicon glyphicon-menu-up vote-button"
        [class.highlighted]="myVote == 1"
        (click)="upVote()"
      ></i>

      <span class="vote-count">{{ totalVotes }}</span>

      <i
        class="glyphicon glyphicon-menu-down vote-button"
        [class.highlighted]="myVote == -1"
        (click)="downVote()"
      ></i>
    </div>
  `,
  styles: [""]
})
export class VoteComponent {
  @Input() othersVote = 0;
  @Input() myVote = 0;

  @Output() vote = new EventEmitter();

  upVote() {
    if (this.myVote == 1) return;

    this.myVote++;

    this.vote.emit({ myVote: this.myVote });
  }

  downVote() {
    if (this.myVote == -1) return;

    this.myVote--;

    this.vote.emit({ myVote: this.myVote });
  }

  get totalVotes() {
    return this.othersVote + this.myVote;
  }
}
