import React, {Component, createElement} from 'react';
import '../components/Songs/SongStyle/SongStyle.css';
import Header from '../components/Header/Header';
import SongList from '../components/Songs/SongList'
import Axios from 'axios';

class Songs extends Component{


    
    render(){
        return(
            <div>
                <Header/>
                <SongList/>
            </div>
        );
    }
}

export default Songs;