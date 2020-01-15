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
                    <div className = 'littleHeader'>             
                        <Link href='./addsong'>
                            <a className = 'addNew'>add song</a>
                        </Link>
                    </div>   
                <SongList/>
            </div>
        );  
    }
}

export default Songs;