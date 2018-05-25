import React, { Component } from 'react';
import Gallery from "./gallery";

class Art extends React.Component {
	state ={
		artlist :this.props.location.state.artlist,
		index: this.props.match.params.userid,
		todos:[]
	}



 
  render() {
  console.log(this.state.artlist[this.state.index].url);
    return (
   
  <div>
  <img src={this.state.artlist[this.state.index].url}/>
  ART WORK Number : {this.state.index}









</div>

    

    );
  }
}

export default Art;
