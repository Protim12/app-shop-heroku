import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import {filter} from 'rxjs/operators';
// import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shop1';
  // subscription: Subscription;

  // constructor(private router: Router) {}
  // ngOnInit() {
  //   this.subscription = this.router.events.pipe(
  //       filter(event => event instanceof NavigationEnd)
  //   ).subscribe(() => window.scrollTo(0, 0));
  // }

  // ngOnDestroy() {
  //     this.subscription.unsubscribe();
  // }


}
