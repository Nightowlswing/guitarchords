import React, {Component, createElement} from 'react';
import Header from '../components/Header/Header';
import SongList from '../components/Songs/SongList'
import Axios from 'axios';
import '../Styles/PropStyles/LinkButtonStyle.css';
import Link from 'next/link';
class Songs extends Component{


    
    render(){
        return(
            <div>
                <Header/>                
                    <Link href='./addsong'>
                        <a className = 'ButtonRef'>add song</a>
                    </Link>
                <SongList/>
            </div>
        );  
    }
}

export default Songs;