import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';

@Component({
  selector: 'app-example02',
  templateUrl: './example02.component.html',
  styleUrls: ['./example02.component.scss']
})
export class Example02Component implements OnInit, OnDestroy {

  constructor() { }

  // Create a susbcription object
  private mySusbcription: Subscription;

  // constructor() { }

  // Create simple observable that emits three values
  myObservable$: Observable<number> = of(1, 2, 3);

  ngOnInit() {
    // Execute with the observer object
    // this.myObservable$.subscribe(item => console.log('Item value: ' + item));

    this.mySusbcription = this.myObservable$.subscribe(y => console.log('Y value: ' + y));
  }

  ngOnDestroy() {
    // Destruction of the component
    this.mySusbcription.unsubscribe();
  }

}

// https://blog.angularindepth.com/the-best-way-to-unsubscribe-rxjs-observable-in-the-angular-applications-d8f9aa42f6a0
