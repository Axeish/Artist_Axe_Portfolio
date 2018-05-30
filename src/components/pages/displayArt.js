//displayArt

//importing npm modules
import React, { Component } from 'react';
import { Row, Col }  from 'reactstrap';
import {  Link } from 'react-router-dom'  ;

//classes and rendering
class Gallery extends Component {

	render() {
		//console.log(this.props.todos);
    return (

            <div>hello {this.props.todos[0]}</div>


    	          );
  }
}
export default Gallery;
