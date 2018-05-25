//importing npm modules
import React, { Component } from 'react';

//classes and rendering
class Form extends Component {
  render() {
    return (
            <div className="Form">
              <form onSubmit ={(evt) => this.props.handleSubmit(evt)}>
                <p> Tags </p>
                <input
                  onChange = {(evt) => this.props.handleChange(evt)}
                  value={this.props.inputValue}
                />
              </form>
            </div>
          );
  }
}

export default Form;
