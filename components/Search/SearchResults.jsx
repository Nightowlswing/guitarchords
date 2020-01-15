import React, {Component, createElement} from 'react';
//import '../../Styles/SongStyle/SongStyle.css';
import Axios from 'axios';
import Link from 'next/link';
import EditDir from './EditDir/EditDir'; 
import ArticleCut from '../Articles/ArticleCut/ArticleCut';
import '../../Styles/SearchStyle/SearchResault.css';
import '../../Styles/global.css';

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

    // handleClick = e =>{
    //     e.preventDefault();
    //     const {name, value} = e.target;

    //     if(this.state.name){
    //         e.target.style.backgroundColor = '#60f78a';
    //         this.setState({name: false})
            
    //         document.getElementById(name).style.display = 'none';
    //     }
    //     else{
    //         e.target.style.backgroundColor = '#8fffae';
    //         this.setState({name: true})
    //         document.getElementById(name).style.display = 'block';
    //     }
    // }
    componentDidMount(){
        const dir = EditDir(window.location.pathname);
       // alert('h')
        Axios.get('http://localhost:3210/searchC',{params: { Q: dir }}).then ((response) => { this.setState({compositors: response.data})});
        Axios.get('http://localhost:3210/searchS',{params: { Q: dir }}).then ((response) => { this.setState({songs: response.data})});
        Axios.get('http://localhost:3210/searchA',{params: { Q: dir }}).then ((response) => { this.setState({articles: response.data})});
    }
    render(){
        return(
            <div >
                {/* <div className = 'optionButtons'>
                    <Button  divclassname = 'buttonDiv' buttonclassname = 'optionButton' type = 'button' name = 'Songs' onClick = {this.handleClick}/>
                    <Button  divclassname = 'buttonDiv' buttonclassname = 'optionButton' type = 'button' name = 'Compositors' onClick = {this.handleClick}/>
                    <Button  divclassname = 'buttonDiv' buttonclassname = 'optionButton' type = 'button' name = 'Articles' onClick = {this.handleClick}/>
                </div> */}
                <div className = 'LightDiv'>
                    <div id = 'Compositors'>
                        <ul className = 'searchResults'>
                            {this.state.compositors.map((value) => {
                                return (
                                    <CompRef
                                    id = {value.id}
                                    cname = {value.cname}
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