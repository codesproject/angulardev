import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dispValue: string = '';
  showItem: boolean = false;
  itemCount: number;
  btnText: string = 'Add an Item';
  goalText: string = 'My first life goal';
  goals = [];

  constructor() { }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }
  addedList () {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;

      this.showItem = true;
      this.btnText = 'Item Added';
    }
    removeItem (i) {
    this.goals.splice(i, 1);
    }
}
