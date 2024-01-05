import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyRh';
  actions : Array<any> = [
    {title: "Home", link: ""},
    {title: "job Offers", link: "/jobOffers"},
  ];

  currentAction: any;
  setCurrentAction(action: any) {
    this.currentAction = action;
  }
}
