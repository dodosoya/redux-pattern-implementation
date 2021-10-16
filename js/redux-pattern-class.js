// redux createStore
class CreateStore {
  constructor(reducer, preloadedState) {
    this.currentReducer = reducer;
    this.currentState = preloadedState;
    this.currentListeners = [];
    this.dispatch({ type: 'INIT' });
  }

  getState() {
    return this.currentState;
  }

  dispatch(action) {
    this.currentState = this.currentReducer(this.currentState, action);
    this.currentListeners.forEach(listener => {
      listener();
    })
  }

  subscribe(newListener) {
    this.currentListeners.push(newListener);
    const unsubscribe = () => {
      this.currentListeners = this.currentListeners.filter(listener => listener !== newListener);
    }
    return unsubscribe;
  }
}
