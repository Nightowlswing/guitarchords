import React, {Component} from 'react';
import Header from '../components/Header/Header';
import Song from '../components/Songs/song';
import './../components/global.css';


class song extends Component{
    render(){
      return(
        <div>
            <Header/>
            <Song/>
        </div>
      );
    }
    
}
  
  export default song;
  