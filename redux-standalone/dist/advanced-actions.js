'use strict';

var _redux = require('redux');

// refactor 2: action type extraction
var TODO_ADD = 'TODO_ADD';
var TODO_TOGGLE = 'TODO_TOGGLE';

function reducer(state, action) {
  switch (action.type) {
    case TODO_ADD:
      {
        return applyAddTodo(state, action);
      }
    case TODO_TOGGLE:
      {
        return applyToggleTodo(state, action);
      }
    default:
      return state;
  }
}

function applyAddTodo(state, action) {
  // refactor 1: minimum payload
  var todo = Object.assign({}, action.todo, { completed: false });
  return state.concat(todo);
}

function applyToggleTodo(state, action) {
  return state.map(function (todo) {
    return todo.id === action.todo.id ? Object.assign({}, todo, { completed: !todo.completed }) : todo;
  });
}

// refactor 3: action creator
function doAddTodo(id, name) {
  return {
    type: TODO_ADD,
    todo: { id: id, name: name }
  };
}

function doToggleTodo(id) {
  return {
    type: TODO_TOGGLE,
    todo: { id: id }
  };
}

var store = (0, _redux.createStore)(reducer, []);

var unsubscribe = store.subscribe(function () {
  console.log(store.getState());
});

store.dispatch(doAddTodo('0', 'learn redux'));
store.dispatch(doAddTodo('1', 'learn mobx'));

store.dispatch(doToggleTodo('0'));