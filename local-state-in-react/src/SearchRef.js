import React from 'react';

class SearchRef extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    const { value } = this.input;
    for (var propName in this.input) {
      console.log(propName + ': ' + this.input[propName]);
    }
    // do something with the search value
    // e.g. propagate it up to the parent component this.props.onSearch(value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}> <input
        ref={node => this.input = node}
        type="text"
      />
        <button type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default SearchRef;