//importing npm modules
import React, { Component } from 'react';
import {Link} from 'react-router-dom'  ;

//classes and rendering
class Header extends Component {
  render() {
    
    return (
            <header>
              <div>
                <div className ="logo">Axeish Guy</div>
                <nav>
                  <ul>
                    <li className="first">
                      <Link to='/' >Home </Link>
                    </li>
                    <li>
                      <Link to='/Product' params={{ testvalue: "hello" }} >Product </Link> 
                    </li>
                    <li className="last">
                      <Link to='/' >Contact </Link>
                    </li>
                  </ul>
                </nav>
              </div>
             </header>
            );
          }
}

export default Header;
