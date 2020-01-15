import React, {Component, createElement} from 'react';
import '../../Styles/SongStyle/SongStyle.css';
import Axios from 'axios';
import Link from 'next/link';
import '../../Styles/global.css';
import '../../Styles/SearchStyle/SearchResault.css';

class SongList extends Component{
    constructor(props){
        super(props)
        this.state = {
          songs: [],
          comp: []
        }
    }     
    componentDidMount(){
        Axios.get('http://localhost:3210/allSongs').then ((response) => { this.setState({songs: response.data})});
    }
    render(){
        return(
            <div className = 'LightDiv'>
                <ul className = 'searchResults'>
                    {this.state.songs.map((value) => {
                        return (
                            
                            <SongRef
                            name = {value.name}
                            comp_id = {value.comp_id}
                            id = {value.id}
                            cname = {value.cname}
                            />
                        );
                    })}
                </ul>
            </div>
        );
    }

    
    
}


const SongRef = props =>(
    <Link href = '/[song]/' as ={`/${props.id}`}>
        <li className = 'searchResult'><a>{props.cname} - {props.name}</a></li>
    </Link>
);

export default SongList;