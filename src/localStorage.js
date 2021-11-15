const loadStateFromLocalStorage = () => {
    const localState = localStorage.getItem('state');
    if(localState === null) {
      return undefined;
    }
    return JSON.parse(localState);
}

const saveStateToLocalStorage = (state) => {
      const localState = JSON.stringify(state);
      localStorage.setItem('state', localState);
}

export {
  loadStateFromLocalStorage,
  saveStateToLocalStorage
}