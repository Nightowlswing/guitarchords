import React, {Component, createElement} from 'react';
import '../../Styles/SongStyle/SongStyle.css';
import Axios from 'axios';
import Link from 'next/link';
import EditDir from '../Search/EditDir/EditDir';
import '../../Styles/SearchStyle/SearchResault.css'
import '../../Styles/global.css';
import {ALL_SONGS_OF_COMPOSITOR} from '../urls';
class SongList extends Component{
    constructor(props){
        super(props)
        this.state = {
          songs: []
        }
    }     
    componentDidMount(){
        var dir = EditDir(window.location.pathname);
        
        Axios.get(ALL_SONGS_OF_COMPOSITOR + dir).then ((response) => { this.setState({songs: response.data})
    });
        
    }
    render(){
        return(
            <div>
                <div>
                    
                    <ul className = 'searchResults'>
                        {   
                        
                        this.state.songs.map((value) => {
                                return (
                                    <div>
                                        <SongRef
                                        name = {value.name}
                                        comp_id = {value.comp_id}
                                        id = {value.id}
                                        cname = {value.cname}
                                        />
                                    </div>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }

    
    
}

const SongRef = props =>(
    <Link href = '/[song]/' as ={`/${props.id}`}>
        <li><a className = 'songref searchResult'>{props.cname} - {props.name}</a></li>
    </Link>
);

export default SongList;