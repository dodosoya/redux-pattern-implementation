const listeners = [];

listeners.push(() => {
  console.log('listener1');
});
listeners.push(() => {
  console.log('listener2');
});

listeners.forEach(listener => {
  listener();
});
