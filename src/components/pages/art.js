//importing npm modules
import React, { Component } from 'react';
import {  Link } from 'react-router-dom' 
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { Row, Col }  from 'reactstrap';
import {faAngleLeft, faAngleRight} from '@fortawesome/fontawesome-free-solid'
//importing components
import Gallery from "./gallery";


//classes and rendering
class Art extends Component {

  //this.state
  state ={

    artlist :[
      {
        tags: ["#ash", "#love",'#12'], 
        title: "love", 
        url:"http://placehold.it/320x320&text=image0",
        info:"lorem ipsem is a really cool text experimenting stuff",


      },
      {
        tags: ["#asdsh", "#love",'#13'], 
        title: "lodsdddve", 
        url:"http://placehold.it/320x320&text=image1",
         info:"lorem ipsem is a really cool text experimenting stuff",
      },
      {
        tags: ["#ash", "#love","#14"],
         title: "love", 
        url:"http://placehold.it/320x320&text=image2",
         info:"lorem ipsem is a really cool text experimenting stuff",
       },
      {
        tags: ["#asdsh", "#love","#15"], 
        title: "lodsdddve", 
        url:"http://placehold.it/320x320&text=image3",
         info:"lorem ipsem is a really cool text experimenting stuff",
      },
      {
        tags: ["#ash", "#love"], 
        title: "love", 
        url:"http://placehold.it/320x320&text=image4", 
        info:"lorem ipsem is a really cool text experimenting stuff",

      },
      {
        tags: ["#asdsh", "#love","#16"], 
        title: "lodsdddve", 
        url:"http://placehold.it/320x320&text=image5",
         info:"lorem ipsem is a really cool text experimenting stuff",
      },
      {
        tags: ["#ash", "#love"], 
        title: "love",
        url:"http://placehold.it/320x320&text=image6",
         info:"lorem ipsem is a really cool text experimenting stuff",
      },
      {
        tags: ["#asdsh", "#love"], 
        title: "lodsdddve",
        url:"http://placehold.it/320x320&text=image7",
         info:"lorem ipsem is a really cool text experimenting stuff",
      },
      ]  ,
	index: 0 ,

	todos:[],

  }
  componentDidUpdate() {
  window.scrollTo(0,0);
}
  render() {
 //  console.log(this.state.artlist[this.props.match.params.userid]);
  console.log(this.props);  


    
    return (
            <div className="container-fluid">
            <div className="body-content">

                <div className="article">    
                <Row>
                </Row> 
                <Col>
                <Link to='/' >Home </Link>
                </Col>
                <Row>
                 <Col lg="6">                 
                <img src={this.state.artlist[this.props.match.params.userid].url}/>
                </Col>
                 <Col lg="6">
                
                    <p>    ART TITLE: {this.state.artlist[this.props.match.params.userid].title}</p>
                			<p>	ART Info : {this.state.artlist[this.props.match.params.userid].info}</p>
                        <p>ART Tags: {this.state.artlist[this.props.match.params.userid].tags}	
                        		</p> 
                        </Col>
                        </Row>             
                </div>
                <br/>


              <Gallery
                todos={this.state.todos}
                filter="0"
                />

            </div>
            </div>
            
            );
    }
}

export default Art;
