//importing npm modules
import React, { Component } from 'react';

//classes and rendering
class Product extends Component {
  render() {
    return (
            <div className="container-fluid">
              <h1> All work</h1>
              
              <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu 
              </p>

              <button type="button" class="btn btn-primary">Primary</button>
              <img 
                 src="https://drive.google.com/uc?export=download&id=0B2FfLSMY1yXUSDNVTGMzQVRCc2dFR0tPdzRBODU2N0U0cGNz"
              />
            </div>
          );
  }
}

export default Product;
