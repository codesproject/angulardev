import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

foodItem = ['Rice', 'Beans', 'Yam', 'Bread', 'Amala'];

fav = this.foodItem[4];
dispValue:string = '';
showItem:boolean = false;
itemCount: number;
btnText: string = 'Add an Item';
goalText: string = 'My first life goal';
goals = [];

constructor () { }

ngOnInit() {
  this.itemCount = this.goals.length;
}

addedList () {
this.goals.push(this.goalText);
this.goalText = '';
this.itemCount = this.goals.length;

  this.showItem = true;
  this.btnText = "Item Added";
}

removeItem (i) {
this.goals.splice(i, 1);
}


}