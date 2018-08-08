import React from 'react';

function Search({ query, onChange, children }) {
  return (
    <div>
      {children}
      <input type="text" value={query} onChange={onChange} />
    </div>
  );
}

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      archivedItems: []
    };
    this.onArchive = this.onArchive.bind(this);
  }

  onArchive(id) {
    const { archivedItems } = this.state;
    this.setState({
      archivedItems: [...archivedItems, id]
    });
  }

  render() {
    const { list } = this.props;
    const { archivedItems } = this.state;
    const filteredList = list.filter(byArchived(archivedItems));
    return (
      <ul>
        {filteredList.map(item =>
          <li key={item.id}>
            <span>
              {item.name}
            </span>
            <span>
              <button
                type="button"
                onClick={() => this.onArchive(item.id)}
              > Archive
                  </button>
            </span>
          </li>)}
      </ul>
    );
  }
}


class SearchableList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '', archivedItems: []
    };
    this.onChange = this.onChange.bind(this);
    this.onArchive = this.onArchive.bind(this);
  }
  
  onChange(event) {
    const { value } = event.target;
    this.setState({
      query: value
    });
  }

  onArchive(id) {
    const { archivedItems } = this.state;
    this.setState({
      archivedItems: [...archivedItems, id]
    });
  }

  render() {
    const { list } = this.props;
    const { query } = this.state;
    const filteredList = list
      .filter(byQuery(query));

    return (
      <div>
        <Search
          query={query}
          onChange={this.onChange}
        >
          Search List:
        </Search>
        <List
          list={filteredList}
        />
      </div>
    );
  }
}

function byQuery(query) {
  return function (item) {
    return !query ||
      item.name.toLowerCase().includes(query.toLowerCase());
  }
}

function byArchived(archivedItems) {
  return function (item) {
    return !archivedItems.includes(item.id);
  }
}

export { SearchableList };