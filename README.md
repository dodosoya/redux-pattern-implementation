# Redux Pattern Implementation

![image](https://github.com/dodosoya/redux-pattern-implementation/blob/main/demo.gif?raw=true)

## Use Patterns:
  * Module pattern
  * Observer pattern


## Steps:

### 1. Define "createStore" function and return "store" object
store object APIs:
  * getState
  * dispatch
  * subscribe

```js
const createStore = (reducer, preloadedState) => {
  let currentReducer = reducer;
  let currentState = preloadedState;

  const getState = () => {
    return currentState;
  };

  const dispatch = () => {};

  const subscribe = () => {};

  return {
    getState,
    dispatch,
    subscribe,
  };
};
```

### 2. Implement "dispatch" function
Call reducer to calculate the next state 

```js
const dispatch = action => {
  currentState = currentReducer(currentState, action);
};
```

### 3. Implement "subscribe" function and return a function to cancel it

```js
let currentListeners = [];

const subscribe = newListener => {
  currentListeners.push(newListener);
  const unsubscribe = () => {
    currentListeners = currentListeners.filter(listener => listener !== newListener);
  };
  return unsubscribe;
};
```

### 4. In "dispatch" function, call listeners one by one after calling reducer

```js
const dispatch = action => {
  currentState = currentReducer(currentState, action);
  currentListeners.forEach(listener => {
    listener();
  });
};
```

### 5. Dispatch an "INIT" action to return initial state

```js
dispatch({ type: 'INIT' });
```
