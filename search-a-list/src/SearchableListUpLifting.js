import React from 'react';

function Search({ query, onChange, children }) {
  return (
    <div>
      {children}
      <input type="text" value={query} onChange={onChange} />
    </div>
  );
}

function List({ list }) {
  return (
    <ul>
      {list.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>
  );
}

class SearchableList extends React.Component {
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
    const { list } = this.props;
    const { query } = this.state;
    return (
      <div>
        <Search
          query={query}
          onChange={this.onChange}
        >
          Search List:
        </Search>
        <List list={(list || []).filter(byQuery(query))} />
      </div>);
  }
}

function byQuery(query) {
  return function (item) {
    return !query ||
      item.name.toLowerCase().includes(query.toLowerCase());
  }
}

export default SearchableList;
