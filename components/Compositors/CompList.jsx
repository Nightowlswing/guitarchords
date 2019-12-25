import React, {Component, createElement} from 'react';
import '../../Styles/SongStyle/SongStyle.css';
import Axios from 'axios';
import Link from 'next/link';


class CompList extends Component{
    constructor(props){
        super(props)
        this.state = {
          songs: [],
          comp: []
        }
    }     
    componentDidMount(){
        Axios.get('http://localhost:3210/allComp').then ((response) => { this.setState({songs: response.data})});
    }
    render(){
        return(
            <ul>
                {this.state.songs.map((value) => {
                    return (                       
                        <SongRef
                        id = {value.id}
                        cname = {value.cname}
                        />
                    );
                   
                })}
            </ul>
        );
    }

    
    
}


const SongRef = props =>(
    <Link href = '/CompPages/[comp]/' as ={`/CompPages/${props.id}`}>
        <li><a>{props.cname}</a></li>
    </Link>
);

export default CompList;