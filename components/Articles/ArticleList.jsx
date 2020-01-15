import React, {Component, createElement} from 'react';
import Axios from 'axios';
import Link from 'next/link';
import ArticleCut from './ArticleCut/ArticleCut';
import '../../Styles/global.css';
import '../../Styles/SearchStyle/SearchResault.css'

class ArticleList extends Component{
    constructor(props){
        super(props)
        this.state = {
          articles: []
        }
    }     
    componentDidMount(){
        Axios.get('http://localhost:3210/allArticles').then ((response) => { this.setState({articles: response.data})
        
    });
    }
    render(){
        return(
            <div className = 'LightDiv'>
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
        );
    }

    
    
}


const ArticleRef = props =>(
    <div className = 'articleBlock'>
    <span>

    <Link href = '/Articles/[article]' as ={`/Articles/${props.id}`}>
        <li className = 'searchResult headLine'><a>{props.name}</a></li>
    </Link>

    </span>
    <div className = 'subResaults'>
        {ArticleCut(props.text)}
    </div>
    </div>
);

export default ArticleList;