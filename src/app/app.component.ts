import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-shop';

  subpageSelected = 'recipe';

  onNavigate(subpage: string) {
    this.subpageSelected = subpage;
  }


}
