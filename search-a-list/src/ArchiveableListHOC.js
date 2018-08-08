import React from 'react';

function byArchived(archivedItems) {
  return function (item) {
    return !archivedItems.includes(item.id);
  };
}

function withArchive(Component) {

  class WithArchive extends React.Component {
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
      return <Component list={filteredList} onArchive={this.onArchive} />
    }
  }

  return WithArchive;
}

function List({ list, onArchive }) {
  return (
    <ul>
      {list.map(item =>
        <li key={item.id}>
          <span>
            {item.name}
          </span>
          <span>
            <button
              type="button"
              onClick={() => onArchive(item.id)}
            >
              Archive
            </button>
          </span>
        </li>)}
    </ul>
  );
}

const ListWithArchive = withArchive(List);

export default ListWithArchive;