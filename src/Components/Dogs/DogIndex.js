import React, { Component } from 'react';
import { useEffect, useState} from 'react';
import { Button } from 'reactstrap';

class DogIndex extends Component {
 constructor(props){
   super(props);
   this.state = {
     dogImage: "",
   };
 }

 fetchDogImage = () => {
   let url = `https://dog.ceo/api/breeds/image/random`;
   fetch(url)
   .then(res => res.json())
   .then(json => {console.log(json.message)
    this.setState({
      dogImage: json.message 
    });
 })
    .catch((error) => console.log(error))
 }

 render() {
   return (
    <div>
      <Button onClick={
        this.fetchDogImage()}>
          Random Dog Picture
        </Button>
        <p><img src={this.state.dogImage}></img></p>
     </div>
     );
    }
  }


export default DogIndex;