const initialState = {
  count: 0,
};

const actions = {
  increment: { type: 'INCREMENT', payload: 1 },
  decrement: { type: 'DECREMENT', payload: 1 }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.increment.type:
      return {
        count: state.count + action.payload
      };
    case actions.decrement.type:
      return {
        count: state.count - action.payload
      };
    default:
      return state;
  }
};

const preloadedState = {
  count: 0,
};

// create store (use function or class)
const store = window.Redux.createStore(reducer, preloadedState);
// const store = new CreateStore(reducer, preloadedState);

store.subscribe(() => {
  console.log('count changed');
  document.getElementById('count').textContent = store.getState().count;
});

// display
document.getElementById('count').textContent = store.getState().count;

// button
document.getElementById('increment').addEventListener('click', () => {
  store.dispatch(actions.increment);
});
document.getElementById('decrement').addEventListener('click', () => {
  store.dispatch(actions.decrement);
});

// log
let unsubscribe = null;
document.getElementById('log').addEventListener('click', () => {
  if (unsubscribe) {
    unsubscribe();
    unsubscribe = null;
  } else {
    unsubscribe = store.subscribe(() => {
      console.log('current count is', store.getState().count);
    });
  }
});
