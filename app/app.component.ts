import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name: string = 'hey amir';
  compute(num) {
    if (num > 0){
      return 1
    }
    return 0
  }

}
