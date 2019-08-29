import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';

@Component({
  selector: 'app-example02',
  templateUrl: './example02.component.html',
  styleUrls: ['./example02.component.scss']
})
export class Example02Component implements OnInit, OnDestroy {

  constructor() { }

  private mySusbcription: Subscription;

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
    // this.myObservable$.subscribe(item => console.log('Item value: ' + item));

    this.mySusbcription = this.myObservable$.subscribe(y => console.log('Y value: ' + y));
  }

  ngOnDestroy() {
      this.mySusbcription.unsubscribe();
  }

}
