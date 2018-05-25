//importing npm modules
import React, { Component } from 'react';
import { Row, Col }  from 'reactstrap';
import {  Link } from 'react-router-dom'  ;

//classes and rendering
class Gallery extends Component {

  //this.state
  state = { 
    artlist :[
      {tags: ["#ash", "#love",'#12'], title: "love", 
        url:"http://placehold.it/320x320&text=image0"},
      {tags: ["#asdsh", "#love",'#13'], title: "lodsdddve", 
        url:"http://placehold.it/320x320&text=image1"},
      {tags: ["#ash", "#love","#14"], title: "love", 
        url:"http://placehold.it/320x320&text=image2"},
      {tags: ["#asdsh", "#love","#15"], title: "lodsdddve", 
        url:"http://placehold.it/320x320&text=image3"},
      {tags: ["#ash", "#love"], title: "love", 
        url:"http://placehold.it/320x320&text=image4"},
      {tags: ["#asdsh", "#love","#16"], title: "lodsdddve", 
        url:"http://placehold.it/320x320&text=image5"},
      {tags: ["#ash", "#love"], title: "love",
        url:"http://placehold.it/320x320&text=image6"},
      {tags: ["#asdsh", "#love"], title: "lodsdddve",
        url:"http://placehold.it/320x320&text=image7"},
      ]  
    }
  
  render() {
    return (
            <div>
              <Row>
                {this.state.artlist.map((item,index)=> {
                  var istagged = 0;
                  var a = this.props.todos;
                  
                  for (var n_index = 0; n_index < a.length; ++n_index) {
                    if (item.tags.indexOf(a[n_index])>-1){
                 	    istagged = istagged+1;
                      }
                    }
            
                  if (this.props.todos.length===0){
            	      istagged = istagged+1;
                    }
         
                  if (istagged>0) {
                    return (
      			                <Col md="3">
      			                  <Link to={
                              {
                                  pathname:`/gallery/${index}`,
                                  state:{
                                      artlist: this.state.artlist
                                      }
                                  }}>
                              
                                <img src={item.url} /></Link>
                                <p className="pop">{item.title}</p>
                            </Col>

      			                )}})
                  }
              
              </Row>
            </div>
          );
  }
}
export default Gallery;
