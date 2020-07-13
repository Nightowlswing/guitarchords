import React, {Component, createElement} from 'react';
import '../../Styles/SongStyle/SongStyle.css';
import Axios from 'axios';
import Link from 'next/link';
import '../../Styles/SearchStyle/SearchResault.css'
import '../../Styles/global.css';
import {ALL_COMPOSITORS} from '../urls';
import Loader from 'react-loader-spinner'

class CompList extends Component{
    constructor(props){
        super(props)
        this.state = {
          comp: undefined
        }
    }     
    componentDidMount(){
        Axios.get(ALL_COMPOSITORS).then ((response) => {
            this.setState({comp: response.data})
        });
    }
    render(){
        if (this.state.comp !== undefined){
            return(
                <ul className = 'searchResults'>
                    {this.state.comp.map((value) => {
                        return (                       
                            <SongRef
                            id = {value.id}
                            cname = {value.name}
                            />
                        );
                       
                    })}
                </ul>
            );
        }
        else{
            return(
                <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}/>
            );
        }

    }

    
    
}


const SongRef = props =>(
    <Link href = '/CompPages/[comp]/' as ={`/CompPages/${props.id}`}>
        <li className = 'searchResult'><a>{props.cname}</a></li>
    </Link>
);

export default CompList;