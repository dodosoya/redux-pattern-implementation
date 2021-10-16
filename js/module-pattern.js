const createCounter = (initialCount, step) => {
  let count = initialCount;

  return {
    getCount: () => {
      return count;
    },
    increment: () => {
      count = count + step;
    },
    decrement: () => {
      count = count - step;
    }
  };
};

const counter1 = createCounter(0, 1);
console.log(counter1.count);       // undefined
console.log(counter1.getCount());  // 0
counter1.increment();
console.log(counter1.getCount());  // 1
counter1.decrement();
console.log(counter1.getCount());  // 0

const counter2 = createCounter(10, 2);
console.log(counter2.count);       // undefined
console.log(counter2.getCount());  // 10
counter2.increment();
console.log(counter2.getCount());  // 12
counter2.decrement();
console.log(counter2.getCount());  // 10
