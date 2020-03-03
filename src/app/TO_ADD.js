import { of } from 'rxjs';
import { map } from 'rxjs/operators';
/*
 *  'of' allows you to deliver values in a sequence
 *  In this case, it will emit 1,2,3,4,5 in order.
 */
const dataSource = of(1, 2, 3, 4, 5);
var count = 0;

// subscribe to our source observable
const subscription = dataSource
  .pipe(
    // add 1 to each emitted value
    map(i => i + 1)
  )
  
  // log: 2, 3, 4, 5, 6
  // .subscribe(value => console.log("Value: %s, value));
  // .subscribe(value => console.log(`Value + 1: ${value}`));
  .subscribe(value => {
    count++;
    console.log(`Original:${count} -- Value: ${value}`)
  });
