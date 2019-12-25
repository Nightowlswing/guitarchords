import React, {Component, createElement} from 'react';
import Header from '../../components/Header/Header';
import SongList from '../../components/Songs/SongList'
import Axios from 'axios';
import SearchResault from '../../components/Search/SearchResults';

class Songs extends Component{


    
    render(){
        return(
            <div>
                <Header/>
                <SearchResault/>
            </div>
        );
    }
}

export default Songs;