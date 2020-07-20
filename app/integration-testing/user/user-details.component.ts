import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-user-details',
  template: `<p>
              user-details works!
            </p>
            <p>UserId: {{ userId }}</p>
            <button (click)="save()">Save</button>
            `
})
export class UserDetailsComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      if (p['id'] === 0)
        this.router.navigate(['not-found']);
    });
  }

  save() { 
    this.router.navigate(['users']);
  }
}
