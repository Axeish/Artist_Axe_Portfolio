import React, { Component } from 'react';


class Task extends Component {
  render() {
    return (
      <div className="Task">
        <span>
          {this.props.todo}
        </span> 
        <button class="btn btn-secondary" onClick={()=>this.props.handleClick(this.props.index)}>
          X
        </button>
      </div>
    );
  }
}

export default Task;
