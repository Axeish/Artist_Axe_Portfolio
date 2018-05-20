import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'  ;

import "./Assets/css/default.min.css";

//components

import Header from "./components/headerComponent/header";
import Footer from "./components/footerComponent/footer";
import Product from "./components/pages/product";

import Homepage from "./components/pages/homePage";

class App extends Component {




  render() {
    return (
      <Router>
      <div className="App">
          <Header/>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/product' component={Product} />    
        
            
        <Footer/>

      </div>
      </Router>
    );
  }
}

export default App;
