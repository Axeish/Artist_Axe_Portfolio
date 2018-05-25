//importing npm modules
import React, { Component } from 'react';

//importing components
import Gallery from "./gallery";

//classes and rendering
class Art extends Component {

  //this.state
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
