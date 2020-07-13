import React, {Component, createElement} from 'react';
import Axios from 'axios';
import Link from 'next/link';
import EditDir from './EditDir/EditDir'; 
import ArticleCut from '../Articles/ArticleCut/ArticleCut';
import '../../Styles/SearchStyle/SearchResault.css';
import '../../Styles/global.css';
import {SEARH_SONG,SEARCH_ARTICLE,SEARCH_COMPOSITOR} from '../urls';
class SearchResault extends Component{
    constructor(props){
        super(props)
        this.state = {
            compositors: [],
            songs:[],
            articles:[],
            Compositors: false,
            Songs: false,
            Articles: false
        }
    }
    componentDidMount(){
        const dir = EditDir(window.location.pathname);
        Axios.get(SEARH_SONG + dir).then ((response) => { 
            if(!response.ok){
                this.setState({songs: response.data})
            }
            else{
                alert('code ' + response.status + ' returned on song query')
            }
        });
        Axios.get(SEARCH_ARTICLE + dir).then ((response) => {
        { 
            if(!response.ok){
                this.setState({articles: response.data})
            }
            else{
                alert('code ' + response.status + ' returned on article query')
            }
        }});
        Axios.get(SEARCH_COMPOSITOR + dir).then ((response) =>  {
            if(!response.ok){
                this.setState({compositors: response.data})
            }
            else{
                alert('code ' + response.status + ' returned on compositor query')
            }});
    }
    render(){
        return(
            <div >
                <div className = 'LightDiv'>
                    <div id = 'Compositors'>
                        <ul className = 'searchResults'>
                            {this.state.compositors.map((value) => {
                                return (
                                    <CompRef
                                    id = {value.id}
                                    cname = {value.name}
                                    />
                                );
                            })}
                        </ul> 
                    </div> 

                <div id = "Songs">
                    <ul className = 'searchResults'>
                        {this.state.songs.map((value) => {
                            return (
                                <SongRef
                                    id = {value.id}
                                    name = {value.name}
                                    cname = {value.cname}
                                />
                            );
                        })}
                    </ul>  
                </div>                           
                <div id = "Articles">                     
                    <ul className = 'searchResults'>
                        {this.state.articles.map((value) => {
                            return (
                                <ArticleRef
                                id = {value.id}
                                name = {value.name}
                                text = {value.text}
                                />
                            );
                        })}
                    </ul>            
                </div>
            </div>
        </div>
            
        );
    }

    
    
}

const Button = props => (
    <div className = {`${props.divclassname}`}>
      <button name ={`${props.name}`} className = {`${props.buttonclassname}`} type = {`${props.type}`}  onClick = {props.onClick}>{props.name}</button>
    </div>
  )

const CompRef = props =>(
    <Link href = '/CompPages/[comp]' as ={`/CompPages/${props.id}`}>
        <li className = 'searchResult'><a><i>Compositor:</i> {props.cname}</a></li>
    </Link>
);

const SongRef = props =>(
    <Link href = '/[song]/' as ={`/${props.id}`}>
        <li className = 'searchResult'><a><i>Song:</i> {props.name}</a></li>
    </Link>
);

const ArticleRef = props =>(
    <div className = 'articleBlock'>
    <span>
    <h6>
    <Link href = '/Articles/[article]' as ={`/Articles/${props.id}`}>
        <li className = 'searchResult headLine'><a> <i>Article:</i> {props.name}</a></li>
    </Link>
    </h6>
    </span>
    <div className = 'subResaults'>
        {ArticleCut(props.text)}
    </div>
    </div>
);

export default SearchResault;