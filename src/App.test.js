import { render, screen } from '@testing-library/react';
import App from './App';
import rootReducer from './reducers/rootReducer';
import {addTodo, deleteTodo, toggleTodo} from './actions/todos';


test('returns default state when no action is present', () => {
  let state;
  state = rootReducer(undefined, {});
  expect(state.length).toEqual(0);
});

test('adds a todo to an empty state', () => {
  let state;
  state = rootReducer([], addTodo({title:'something',description:'something',done:false,id:1636828412176}));
  expect(state).toEqual([{id:1636828412176,description:'something',done:false,title:'something'}]);
});

test('adds a todo to a populated state', () => {
  const previousState = [
    {
      description: 'something',
      title: 'something',
      id: 123456789, 
      done: true
    }
  ]
  expect(rootReducer(previousState, addTodo({id:1636828412176,description:'something added',done:true,title:'something added'}))).toEqual([
    {
      description: 'something',
      title: 'something',
      id: 123456789, 
      done: true
    },
    {
      id:1636828412176,
      description:'something added',
      done:true,
      title:'something added'
    }
  ])
})


test('toggles to done', () => {
  let state;
  state = rootReducer([{id:1636828412176,description:'something',done:false,title:'something'}], toggleTodo({id:1636828412176,description:'something',done:false,title:'something'}));
  expect(state).toEqual([{id:1636828412176,description:'something',done:true,title:'something'}]);
});

test('deletes todo', () => {
  let state;
  state = rootReducer([{id:1636828412176,description:'something',done:true,title:'something'}], deleteTodo({id:1636828412176,description:'something',done:true,title:'something'}));
  expect(state).toEqual([]);
});

test('updates todo', () => {
  let state;
  state = rootReducer([{id:1636884628028,description:'cats',done:false,title:'cats'}], {type:'UPDATE_TODO',payload:{title:'dogd',description:'dogs',id:1636884628028}});
  expect(state).toEqual([{id:1636884628028,description:'dogs',done:false,title:'dogd'}]);
});
