import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button.component';
import { from, of, Observable } from 'rxjs';

@Component({
  selector: 'app-example01',
  templateUrl: './example01.component.html',
  styleUrls: ['./example01.component.scss']
})
export class Example01Component implements OnInit {

  // constructor() { }

  // Create simple observable that emits three values
  myObservable$: Observable<number> = of(1, 2, 3);

  // Create observer object
  // myObserver = {
  //   next: x => console.log('Observer got a next value: ' + x),
  //   error: err => console.error('Observer got an error: ' + err),
  //   complete: () => console.log('Observer got a complete notification')
  // };

  ngOnInit() {
    // Execute with the observer object
    this.myObservable$.subscribe(item => console.log('Item value: ' + item));
  }

}
