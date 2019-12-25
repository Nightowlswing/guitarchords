import React, {Component, createElement} from 'react';
import '../../Styles/SongStyle/SongStyle.css';
import Axios from 'axios';
import Link from 'next/link';
import EditDir from '../Search/EditDir/EditDir';

class SongList extends Component{
    constructor(props){
        super(props)
        this.state = {
          songs: [],
          comp: []
        }
    }     
    componentDidMount(){
        var dir = EditDir(window.location.pathname);
        
        Axios.get('http://localhost:3210/allSongsOfC',{params:{id: dir}}).then ((response) => { this.setState({songs: response.data})
        //console.log(this.state.songs[0].cname);
    });
        
    }
    render(){
        return(
            <div>
                {/* <h1>{this.state.songs.cname}</h1> */}
                <div>
                    
                    <ul>
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

const NoSongs = props =>(
    <h1>No songs out hear</h1>
);

const SongRef = props =>(
    <Link href = '/[song]/' as ={`/${props.id}`}>
        <li><a className = 'songref'>{props.cname} - {props.name}</a></li>
    </Link>
);

export default SongList;