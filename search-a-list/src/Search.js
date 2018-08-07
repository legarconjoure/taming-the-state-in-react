import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const { value } = event.target;
    this.setState({
      query: value
    });
  }

  render() {
    return (
      <div>
        {this.props.children}
        <input
          type="text" value={this.state.query} onChange={this.onChange}
        />
      </div>
    );
  }
}

function List({ list }) {
  return (
    <ul>
      {list.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>);
}

function SearchableList({ list }) {
  return (
    <div>
      <Search>Search List:</Search>
      <List list={list} />
    </div>);
}
