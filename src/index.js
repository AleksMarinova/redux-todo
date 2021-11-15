import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';
import { saveStateToLocalStorage, loadStateFromLocalStorage } from './localStorage';


const stateFromLocalStorage = loadStateFromLocalStorage();
const store = createStore(rootReducer, stateFromLocalStorage, composeWithDevTools());

store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

export default store;


