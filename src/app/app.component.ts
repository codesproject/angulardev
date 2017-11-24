import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  food = ['Rice', 'Beans', 'Bread', 'Amala', 'Eba'];
  fav = this.food[0];
}