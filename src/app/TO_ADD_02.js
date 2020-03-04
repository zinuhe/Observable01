// https://ultimatecourses.com/blog/rxjs-observables-observers-operators

// -) Let’s assume the user types the letter “a” into our input
// -) The Observable then reacts to this event, passing the value to the next observer
// -) The value “a” is passed to .map(), which is subscribing to our initial observable
// -) .map() returns a new Observable of event.target.value and calls .next() on it’s observer
// -) The .next() call will invoke .filter(), which is subscribing to .map(), with the resulting value of the .map() call
// -) .filter() will then return another Observable with the filtered results, calling .next() with the value if the .length is 2 or above
// -) We get the final value through our .subscribe() block

const input$ = Rx.Observable.fromEvent(node, 'input')
  .map(event => event.target.value)
  .filter(value => value.length >= 2)
  .subscribe(value => {
    // use the `value`
  });
