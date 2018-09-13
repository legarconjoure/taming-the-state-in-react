import { createStore, combineReducers } from "redux";

// refactor 2: action type extraction
const TODO_ADD = 'TODO_ADD';
const TODO_TOGGLE = 'TODO_TOGGLE';
// Reducer refactor 1: Add filterReducer
const FILTER_SET = 'FILTER_SET';

function filterReducer(state = 'SHOW_ALL', action) {
  switch(action.type) {
    case FILTER_SET : {
      return applySetFilter(state, action);
    }
    default : return state;
  }
}

function applySetFilter(state, action) {
  return action.filter;
}

// action creator for set filter
function doSetFilter(filter) {
  return {
    type: FILTER_SET,
    filter,
  };
}

// Reducer reafctor 2: combine reducers step 1 rename reducer -> todoReducer, put initial state here
function todoReducer(state = [], action) {
  switch (action.type) {
    case TODO_ADD: {
      return applyAddTodo(state, action);
    }
    case TODO_TOGGLE: {
      return applyToggleTodo(state, action);
    }
    default: return state;
  }
}

// Reducer refactor 2: combine reducers step 2
const rootReducer = combineReducers({
  todoState: todoReducer,
  filterState: filterReducer,
});

function applyAddTodo(state, action) {
  // refactor 1: minimum payload
  const todo = Object.assign({}, action.todo, {completed: false});
  return state.concat(todo);
}

function applyToggleTodo(state, action) {
  return state.map(todo =>
    todo.id === action.todo.id
      ? Object.assign({}, todo, { completed: !todo.completed })
      : todo
  );
}

// refactor 3: action creator
function doAddTodo(id, name) {
  return {
    type: TODO_ADD,
    todo: { id, name },
  };
}

function doToggleTodo(id) {
  return {
    type: TODO_TOGGLE,
    todo: { id },
  };
}

// Reducer refactor 2 step 3, use rootReducer to create store, no initial state.
const store = createStore(rootReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(doAddTodo('0', 'learn redux'));
store.dispatch(doAddTodo('1', 'learn mobx'));

store.dispatch(doToggleTodo('0'));
store.dispatch(doSetFilter('COMPLETED'));