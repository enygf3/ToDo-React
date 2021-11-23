import React, {Component} from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {

  state = {
    term : ''
  };

  onChange = (eventSearch) => {
    const term = eventSearch.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);

  };

  render() {
    return (
      <input type="text"
                className="form-control search-input"
                placeholder="Type to search" onChange = {this.onChange}
                value = {this.state.term}/>
    );
  };
};