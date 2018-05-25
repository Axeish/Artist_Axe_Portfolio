import React, { Component } from 'react';
import logo from "./a.jpeg"
import Art from "./art";
import { Container , Row, Col }  from 'reactstrap';
import Task from "./task";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'  ;
class Gallery extends Component {


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
      
      {this.state.artlist.map((item,index)=>
      	{
          
      		
      		var istagged = 0;
            var a = this.props.todos;
            for (var n_index = 0; n_index < a.length; ++n_index) {
                 if (item.tags.indexOf(a[n_index])>-1){
                 	istagged = istagged+1;
                 }
            }
            if (this.props.todos.length==0){
            	istagged = istagged+1;
            }
         
            if (istagged>0) {

      		return(
      			<Col md="3">
      			
      	 <Link to={
                {
                  pathname:`/gallery/${index}`,
                  state:{
                    artlist: this.state.artlist
                  }
                }
              }><img src={item.url} /></Link>

      			
      			<p className="pop">{item.title}</p>
      			
               
                   </Col>

      			)}
      	
      	})
      }
      </Row>
      <Route exact path='/gallery/:userid' component={Art} artlist={this.state.artlist}/> 
     
</div>

    

    );
  }
}

export default Gallery;
