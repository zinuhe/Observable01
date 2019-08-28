import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
import { Button } from 'protractor';
import { ButtonComponent } from '../button.component';
import { from, of, Observable } from 'rxjs';
// import { ButtonComponent} from '../button.component';

@Component({
  selector: 'app-example01',
  templateUrl: './example01.component.html',
  styleUrls: ['./example01.component.scss']
})
export class Example01Component {

  // constructor() { }


  // Create simple observable that emits three values
  myObservable = of(1, 2, 3);
  timer01$: Observable<number>;
  timer02$: Observable<number> = of(1, 2);

  // Create observer object
  myObserver = {
    next: x => console.log('Observer got a next value: ' + x),
    error: err => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
  };



  // Execute with the observer object
  myObservable.subscribe(myObserver);

}
