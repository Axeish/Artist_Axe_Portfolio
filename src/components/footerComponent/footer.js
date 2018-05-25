//importing npm modules
import React, { Component } from 'react';
import {Link} from 'react-router-dom'  ;

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faTwitter, faTumblr,faInstagram, faGithub} from '@fortawesome/fontawesome-free-brands'
//classes and rendering
class Footer extends Component {
  render() {
    return (
   <footer>
    <ul>
                    <li className="first">
                      <Link to='/' ><FontAwesomeIcon  size="lg" icon={faInstagram} /> </Link>
                    </li>
                    <li>
                      <Link to='/'><FontAwesomeIcon size="lg" icon={faTwitter} /></Link> 
                    </li>
                    <li className="first">
                      <Link to='/' ><FontAwesomeIcon size="lg" icon={faTumblr} /> </Link>
                    </li>
                    
                    
                  </ul>
   </footer>

    );
  }
}

export default Footer;
