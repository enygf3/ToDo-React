import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {

  state = {
    label: ''
  };

  onLabelChange = (eventTyped) => {
    this.setState({
      label: eventTyped.target.value
    });
  };

  onSubmit = (eventTyped) => {
    
    this.setState({
      label: ''
    });

    eventTyped.preventDefault();
    this.props.onItemAdded(this.state.label);
  };

  render() {
    return (
      <form className="item-add-form" onSubmit = {this.onSubmit}>
        <input type = 'text' className = 'form-control' onChange = {this.onLabelChange} placeholder = 'What needs to be done?' value = {this.state.label}></input>
        <button
          className="btn btn-outline-secondary">
          Add Item
        </button>
      </form>
    )
  }
}
