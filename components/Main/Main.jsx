import React, { Component } from 'react'
import '../../Styles/global.css'
import '../../Styles/MainStyles/MainStyle.css'
import SongList from '../../components/Songs/SongList'

export default class Main extends Component{
    render(){
        return( 
            <div>
              <div >
                
              <div >
                  <div><h3>Hi! I'm Vlad</h3></div>
                  
                  <div>
                      <h4>I created this 'masterpiece' for two main reasons:<br/>
                      My coursework from Web and DB :)<br/>
                      I need some peacefull place to store songs chords<br/>
                      If somebody somewhere will gonna need this 'website' for some reason, you're welcome!
                      Here's songs that we have now:</h4>
                  </div>
                  
              </div>
                  <style jsx>{`
                          div{
                              margin-left: auto;
                              margin-right: auto;
                              width: 1000px;
                              text-align: center;
                          }
                        
                  `}</style>
                </div>
                <SongList/>
            </div>
        );
        
    }
}

const slideImages = [
    'static/ex1.jpg',
    'static/ex2.jpg',
    'static/me.jpg'
  ];
   
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
  }
   