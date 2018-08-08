'use strict';

var _redux = require('redux');

function reducer(state, action) {
  switch (action.type) {
    case 'TODO_ADD':
      {
        return applyAddTodo(state, action);
      }
    case 'TODO_TOGGLE':
      {
        return applyToggleTodo(state, action);
      }
    default:
      return state;
  }
}

function applyAddTodo(state, action) {
  return state.concat(action.todo);
}

function applyToggleTodo(state, action) {
  return state.map(function (todo) {
    return todo.id === action.todo.id ? Object.assign({}, todo, { completed: !todo.completed }) : todo;
  });
}

var store = (0, _redux.createStore)(reducer, []);

var unsubscribe = store.subscribe(function () {
  console.log(store.getState());
});

store.dispatch({
  type: 'TODO_ADD',
  todo: { id: '0', name: 'learn redux', completed: false }
});