import React from 'react';

class SearchLocalState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    const { value } = event.target;
    this.setState({
      query: value
    });
  }

  onSubmit(event) {
    const { query } = this.state;
    // do something with the search value
    // e.g. propagate it up to the parent component
    this.props.onSearch(query); event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}> <input
        onChange={this.onChange}
        type="text"
      />
        <button type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default SearchLocalState;