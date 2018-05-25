//importing NPM module
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'  ;


//CSS
import "./Assets/css/default.min.css";


//components
import Header from "./components/headerComponent/header";
import Footer from "./components/footerComponent/footer";
import Product from "./components/pages/product";
import Art from "./components/pages/art";
import Homepage from "./components/pages/homePage";



//classes and rendering
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
          <Header/>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/product' component={Product} />   
            <Route exact path='/gallery' component={Art} />  
         
            
        <Footer/>

      </div>
      </Router>
    );
  }
}

export default App;
