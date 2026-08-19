export function createStore(initialState) {
  let state = initialState;
  let listeners = [];

  function getState() {
    return state;
  }

  function setState(updated) {
    state = { ...state, ...updated };
    listeners.forEach((listener) => listener(state));
  }

  function subscribe(listener) {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((o) => o !== listener);
    };
  }

  return { getState, setState, subscribe };
}