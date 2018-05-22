import React, { Component } from 'react';
import logo from "./a.jpeg"
import Art from "./art";
import { Container , Row, Col }  from 'reactstrap';
import Task from "./task";
class Gallery extends Component {


  state = { 

     artlist :[
        {tags: ["#ash", "#love",'#12'], title: "love"},
         {tags: ["#asdsh", "#love",'#13'], title: "lodsdddve"},
         {tags: ["#ash", "#love","#14"], title: "love"},
         {tags: ["#asdsh", "#love","#15"], title: "lodsdddve"},
{tags: ["#ash", "#love"], title: "love"},
         {tags: ["#asdsh", "#love","#16"], title: "lodsdddve"},
         {tags: ["#ash", "#love"], title: "love"},
         {tags: ["#asdsh", "#love"], title: "lodsdddve"},
{tags: ["#ash", "#love"], title: "love"},
         {tags: ["#asdsh", "#love"], title: "lodsdddve"},
         {tags: ["#ash", "#love"], title: "love"},
         {tags: ["#asdsh", "#love"], title: "lodsdddve"},

{tags: ["#ash", "#love"], title: "love"},
         {tags: ["#asdsh", "#love"], title: "lodsdddve"}


      ]

  }
  render() {
    return (
    
   <div>
    <Row>
      
      {this.state.artlist.map((item,index)=>
      	{
      		var index;
      		var istagged = 0;
            var a = this.props.todos;
            for (index = 0; index < a.length; ++index) {
                 if (item.tags.indexOf(a[index])>-1){
                 	istagged = istagged+1;
                 }
            }
            if (this.props.todos.length==0){
            	istagged = istagged+1;
            }
            console.log(this.props.todos);
            if (istagged>0) {
      		return(
      			<Col md="3">
      			
      			<img src={logo} />
      			<div classname="caption" style={{display: 'none'}}>
      			<Art key={index}
      			item={item}
      			/>
      			</div>
               
                   </Col>

      			)}
      	
      	})
      }
      </Row>

     
</div>

    

    );
  }
}

export default Gallery;
