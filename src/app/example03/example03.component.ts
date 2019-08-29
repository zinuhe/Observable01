import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';

@Component({
  selector: 'app-example03',
  templateUrl: './example03.component.html',
  styleUrls: ['./example03.component.scss']
})
export class Example03Component implements OnInit, OnDestroy {

  constructor() { }

  // Store multiple subscription references in the subscriptions array and unsubscribe all of them during ngOnDestroy

  // Create a susbcription object, first approach is better, second one just as example
  private mySusbcriptions01: Subscription = new Subscription();
  private mySusbcriptions02: Subscription[] = [];


  // Create simple observables that emits three values
  myObservable01$: Observable<number> = of(1, 2, 3);
  myObservable02$: Observable<number> = of(4, 5, 6);

  ngOnInit() {
    // Execute with the observer object
    // Built in mechanism in the Subscription itself
    this.mySusbcriptions01.add(this.myObservable01$.subscribe(x => console.log('X value: ' + x)));
    this.mySusbcriptions01.add(this.myObservable02$.subscribe(y => console.log('Y value: ' + y)));

    // Alternatives (the first one is better)
    // this.mySusbcriptions01[0] = this.myObservable01$.subscribe(z => console.log('Z value: ' + z));
    // this.mySusbcriptions01[1] = this.myObservable02$.subscribe(w => console.log('W value: ' + w));

    this.mySusbcriptions02.push(this.myObservable01$.subscribe(z => console.log('Z value: ' + z)));
    this.mySusbcriptions02.push(this.myObservable02$.subscribe(w => console.log('W value: ' + w)));
  }

  ngOnDestroy() {
    // Destruction of the component
    this.mySusbcriptions01.unsubscribe();

    // Alternative
    this.mySusbcriptions02.forEach(subscription => subscription.unsubscribe());
  }

}

// https://blog.angularindepth.com/the-best-way-to-unsubscribe-rxjs-observable-in-the-angular-applications-d8f9aa42f6a0
