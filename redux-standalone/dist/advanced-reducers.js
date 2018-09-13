'use strict';

var _redux = require('redux');

// refactor 2: action type extraction
var TODO_ADD = 'TODO_ADD';
var TODO_TOGGLE = 'TODO_TOGGLE';
// Reducer refactor 1: Add filterReducer
var FILTER_SET = 'FILTER_SET';

function filterReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'SHOW_ALL';
  var action = arguments[1];

  switch (action.type) {
    case FILTER_SET:
      {
        return applySetFilter(state, action);
      }
    default:
      return state;
  }
}

function applySetFilter(state, action) {
  return action.filter;
}

// action creator for set filter
function doSetFilter(filter) {
  return {
    type: FILTER_SET,
    filter: filter
  };
}

// Reducer reafctor 2: combine reduers step 1 rename reducer -> todoReducer, put initial state here
function todoReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

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

// Reducer refactor 2: combine reducers step 2
var rootReducer = (0, _redux.combineReducers)({
  todoState: todoReducer,
  filterState: filterReducer
});

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

// Reducer refactor 2 step 3, use rootReducer to create store, no initial state.
var store = (0, _redux.createStore)(rootReducer);

var unsubscribe = store.subscribe(function () {
  console.log(store.getState());
});

store.dispatch(doAddTodo('0', 'learn redux'));
store.dispatch(doAddTodo('1', 'learn mobx'));

store.dispatch(doToggleTodo('0'));
store.dispatch(doSetFilter('COMPLETED'));