// redux createStore
const createStore = (reducer, preloadedState) => {
  let currentReducer = reducer;
  let currentState = preloadedState;
  let currentListeners = [];

  const getState = () => {
    return currentState;
  };

  const dispatch = action => {
    currentState = currentReducer(currentState, action);
    currentListeners.forEach(listener => {
      listener();
    });
  };

  const subscribe = newListener => {
    currentListeners.push(newListener);
    const unsubscribe = () => {
      currentListeners = currentListeners.filter(listener => listener !== newListener);
    };
    return unsubscribe;
  };

  dispatch({ type: 'INIT' });

  return {
    getState,
    dispatch,
    subscribe,
  };
};

window.Redux = {
  createStore
};
