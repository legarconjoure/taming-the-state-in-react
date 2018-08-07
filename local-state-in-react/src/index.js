import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import SearchRef from './SearchRef';
import SearchLocalState from './SearchLocalState';
import SearchLocalStateWithControlledComponent from './SearchLocalStateWithControlledComponent';

ReactDOM.render(<SearchLocalStateWithControlledComponent />, document.getElementById('root'));
