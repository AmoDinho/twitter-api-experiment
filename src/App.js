import React, { Component } from "react";
import pic from "./photo1.jpg";
import pic1 from "./photo2.jpg";
import {Container, Row, Col, Card, 
  CardImg, CardText, CardBody, 
  CardSubtitle,CardTitle, Form,
  Label, Input,
  FormGroup } from 'reactstrap';
import "./App.css";

const tweets = [

    {
        tweetId: 1,
        title: "Black Panther",
        author: "Luwdiq Cuda",
        url: "https://unknown.com",
        comments: 10,
        likes: 20,
        retweets: 50,
        imgURL: pic
    },
    {
        tweetId: 2,
        title: "Learn JS for Free",
        author: "@Darth_Vader",
        url: "https://deathstar.com",
        comments: 2,
        likes: 100,
        retweets: 800,
        imgURL: pic1

    }

];


const isSearched = searchTerm => item =>
   item.title.toLowerCase().includes(searchTerm.toLowerCase());


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      tweets,
      searchTerm: '',
    };

    this.onSearchChange = this.onSearchChange.bind(this);
  
  
  
  }

  onSearchChange(event){
    this.setState({searchTerm: event.target.value});
  }


    render() {
      const {tweets, searchTerm} = this.state;
        return (
            <div className="App">
                <div className="App_header">
                    <h1>Twitter Cards</h1>
                </div>
                <Container className="App_body">

                <Row>
                  <Col sm="4"  className="mx-auto mt-5">
                  <Search 
                    value={searchTerm}
                    onChange={this.onSearchChange}
                    />
                   
                  </Col>
                </Row>
                    
                     <Row> 
                       <Col sm="4" className="mx-auto">
                       <br/>
                       <Tweet 
                       tweets={tweets} 
                       pattern={searchTerm}
                       /> 
                       </Col>
                     </Row>
                   
                   
                </Container>
            </div> 
        );
    }
}  

const Search = ({value, onChange, children}) =>
<Form inline>
  {children}
  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
  <Label className="mr-sm-2">Search</Label>
  <Input type="search" 
  placeholder="Search for something"
  onChange={onChange}
  value={value}/>

  </FormGroup>
 
</Form>


const Tweet = ({tweets,pattern}) =>
<div className="tweet">
{tweets.filter(isSearched(pattern)).map(item =>(
 
<Card className="mt-5" key={item.tweetId}>
<CardImg top width="10px" height="70px" src={item.imgURL} alt="tweet" />
<CardBody>

  <CardTitle>{item.title}</CardTitle>
  <CardSubtitle>{item.author}</CardSubtitle>
  <CardText>Likes:{item.likes} Retweets:{item.retweets}</CardText>
</CardBody>

</Card>


))};


</div>

export default App;
