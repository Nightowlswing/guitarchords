import React, { Component } from 'react'
import '../../Styles/global.css'
import '../../Styles/SliderStyle/SliderStyle.css'
import { Slide } from 'react-slideshow-image';

export default class Slider extends Component{

    render(){
      return (
        <div className="slide-container">
          <Slide {...properties}>
            <div className="each-slide">
              <div className ='slide' style={{'backgroundImage': `url(${slideImages[0]})`}}>
                <span></span>
              </div>
            </div>
            <div className="each-slide">
              <div className ='slide' style={{'backgroundImage': `url(${slideImages[1]})`}}>
                <span></span>
              </div>
            </div>
            <div className="each-slide">
              <div className ='slide' style={{'backgroundImage': `url(${slideImages[2]})`}}>
                <span></span>
              </div>
            </div>
          </Slide>
        </div>
      )
        
    }
}

const slideImages = [
  'static/electric1000.jpg',
  'static/electric10002.jpg',
  'static/guiatar1.jpg'
];
 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}