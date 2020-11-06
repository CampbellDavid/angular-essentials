import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rootItems = ['Apples', 'Bananas', 'Cherries']
  rootName = 'David';
  title = 'app'
  number = 1
  onNameChanged(newName) {
    this.rootName = newName
  }
  onItemWasAdded(newItem) {
    this.rootItems.push(newItem)
    console.log(this.rootItems)
  }
  onIncrease() {
    this.number = this.number * 2
  }
}
