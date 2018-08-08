import React from 'react';
import ReactDOM from 'react-dom';
import { SearchableList } from './SearchableListDownLifting';

const myList = [
  {
    id: 1,
    name: "item 1",
  },
  {
    id: 2,
    name: "item 2",
  }
]
// ReactDOM.render(<SearchableList list={myList}/>, document.getElementById('root'));
ReactDOM.render(<SearchableList list={myList}/>, document.getElementById('root'));
