import React, { Component } from "react";
import pic from "./photo1.jpg";
import pic1 from "./photo2.jpg";
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

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h1>Twitter Cards</h1>
                </div>
                <div className="App-body">


                    {tweets.map(item =>(
                        <div key={item.tweetId}>
                            <span>{item.title} </span> 

                            <span> {item.author}</span> 

                            <span>{item.comments} </span> 

                            <span>{item.likes} </span> 
                            <span>{item.retweets} </span> 
                            <img width="20px" height="20px" src={item.imgURL} />
                        </div>
                    ))};
                </div>
            </div>
        );
    }
}  

export default App;
