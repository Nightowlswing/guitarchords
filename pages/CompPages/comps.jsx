import React, {Component, createElement} from 'react';
//import '../components/Songs/SongStyle/SongStyle.css';
import Header from '../../components/Header/Header';
import SongList from '../../components/Songs/SongList'
import CompList from '../../components/Compositors/CompList';
import '../../Styles/global.css';
import '../../Styles/SearchStyle/SearchResault.css'
import Axios from 'axios';

class comps extends Component{


    
    render(){
        return(
            <div >
                <Header/>
                <div className = 'littleHeader'><span className = 'addNew'>Compositors</span></div>
                <div className = 'LightDiv'>
                    <CompList/>
                </div>
            </div>
        );
    }
}

export default comps;