import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button.component';
import { Observable, of } from 'rxjs';

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
    this.myObservable$.subscribe(x => console.log('X value: ' + x));
  }

}

// https://blog.angularindepth.com/the-best-way-to-unsubscribe-rxjs-observable-in-the-angular-applications-d8f9aa42f6a0
