import { Component } from '@angular/core'

@Component({
  selector: 'app-user',
  template: `
    <input type="text" (input)="onUserInput($event)" [value]="name">
    <p>Hi there, {{ name }}</p>
    <p>I'm the user component</p>
  `
})

export class UserComponent {
  name = 'David';
  onUserInput(event) {
    this.name = event.target.value
  }
}
