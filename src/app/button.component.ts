import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <div>
      <button (click)="onClickMe()">Click me</button>  {{clickMessage}}
    </div>`
})
export class ButtonComponent {

  constructor() { }

  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'Clicked';
  }
}
