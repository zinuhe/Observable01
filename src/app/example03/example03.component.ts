import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';

@Component({
  selector: 'app-example03',
  templateUrl: './example03.component.html',
  styleUrls: ['./example03.component.scss']
})
export class Example03Component implements OnInit, OnDestroy {

  constructor() { }

  // Create a susbcription object
  private mySusbcriptions: Subscription[] = [];

  // Create simple observables that emits three values
  myObservable01$: Observable<number> = of(1, 2, 3);
  myObservable02$: Observable<number> = of(4, 5, 6);

  ngOnInit() {
    // Execute with the observer object
    // this.mySusbcription[0] = this.myObservable01$.subscribe(x => console.log('X value: ' + x));
    // this.mySusbcription[1] = this.myObservable02$.subscribe(y => console.log('Y value: ' + y));

    this.mySusbcriptions.push(this.myObservable01$.subscribe(x => console.log('X value: ' + x)));
    this.mySusbcriptions.push(this.myObservable02$.subscribe(y => console.log('Y value: ' + y)));
  }

  ngOnDestroy() {
    // Destruction of the component
    this.mySusbcriptions.forEach(subscription => subscription.unsubscribe());
  }

}

// https://blog.angularindepth.com/the-best-way-to-unsubscribe-rxjs-observable-in-the-angular-applications-d8f9aa42f6a0
