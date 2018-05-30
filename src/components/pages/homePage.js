//importing npm modules
import React, { Component } from 'react';

//importing components
import List from "./list";
import Form from "./form";
import Gallery from "./gallery";

//classes and rendering
class Homepage extends Component {

  //this.state
  state ={
    inputValue:"",
    todos: []
    }
    
  handleChange = (evt) => {
    this.setState({inputValue: evt.target.value});
  }
    
  handleClick =(index) => {    
    const todos = this.state.todos;
    if (index > -1) {
      todos.splice(index, 1);
    }
    this.setState(todos);
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    var  spring= this.state.inputValue;
      
    if (spring.charAt(0) !== '#') {
      spring = '#' +spring;
    }

    if (spring.length > 1) {
      const newTodo = spring;
      const todos = this.state.todos;
      todos.push(newTodo);
      this.setState({todos, inputValue: ''})
    }
  }
  
  render() {
    return (
            <div className="container-fluid">
            <div className="body-content">
              <h1> Axeish Guy</h1>
              <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
                  like Aldus PageMaker including versions of Lorem Ipsu 
              </p>
              <button type="button" class="btn btn-primary">Primary</button>

              <Form
                handleChange = {this.handleChange}
                inputValue={this.state.inputValue}
                handleSubmit = {this.handleSubmit}
              />      

              <List
                todos={this.state.todos}
                handleClick={this.handleClick}
              />
        
              <Gallery
                todos={this.state.todos}
                filter="1"
                />
            </div>
            </div>
          );
  }
}

export default Homepage;
