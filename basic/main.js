'use strict'

class Counter {
  constructor(runEveryFiveTimes) {
    this.counter = 0;
    this.callback = runEveryFiveTimes;
  }
    increase() {
      this.counter++;
      console.log(this.counter);
      if (this.counter % 5 === 0 ) {
        this.callback(this.counter)
      }
    }
}

function printSomething(num) {
  console.log(`Wow! ${num}`);
}

function alertNum(num) {
  alert(`alert! ${num}`);
}

const coolCounter = new Counter();

coolCounter.increase(printSomething);



// class Counter {
//   constructor() {
//     this.counter = 0;
//    }

//    increase(runIf5Times) {
//      this.counter++;
//      console.log(this.counter);
//      if(this.counter % 5 === 0) { // 5로 나눈 나머지값(5의 배수 찾는 법)
//       runIf5Times(this.counter);
//      }
//    }
// }

// const coolCounter = new Counter();
// function printSomething(num) {
//   console.log(`Wow! ${num}`)
// }

// function alertNum(num) {
//   alert(`yo ${num}`);
// }
// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);

// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);
// coolCounter.increase(alertNum);