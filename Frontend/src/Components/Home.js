import React from 'react';
import Header from "./NavbarHome/Header";
import {Carousel, Container} from 'react-bootstrap';
import Assets from '../Assets/7.jpg'
// import '../styles/MainPage.css'


export default function Home() {
  return (
    <div >
        <Header />
      <div>  
        <Carousel>
  <Carousel.Item style={{'height':"600px"}}>
    <img 
      className="d-block w-100"
      src="http://www.123rf.com/apicore/storage/s3/b96a111a1da95c37f37f6e81c5fa07ac.jpg"
      
    />
   
  </Carousel.Item>
  <Carousel.Item style={{'height':"600px"}}>
    <img 
      className="d-block w-100"
      src="http://www.123rf.com/apicore/storage/s3/90245cba2f7bc34d6d50193a0961acfd.jpg"
     
    />

    
  </Carousel.Item>
  <Carousel.Item style={{'height':"600px"}}>
    <img 
      className="d-block w-100"
      src="http://www.123rf.com/apicore/storage/s3/490a9fd6630e6abc3696147a68a0f1ff.jpg"
     
    />

    
  </Carousel.Item>
</Carousel>
</div>
</div>
  )
}