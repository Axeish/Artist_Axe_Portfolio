import React, { Component } from 'react';

import Task from "./task";
class List extends Component {


  state = {
  	
  }

  render() {
    return (
     <div className="List">
     {this.props.todos.map((todo,index)=>{
     	return(
     		<Task 
     		key={index}
     		index={index}
     		handleClick={this.props.handleClick}
            todo = {todo} 


     		/>)
     })}
      
   
        </div>


    

    );
  }
}

export default List;