import React, {Component, createElement} from 'react';
import Axios from 'axios';
import Link from 'next/link';
import ArticleCut from './ArticleCut/ArticleCut';

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
            <ul>
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
        );
    }

    
    
}


const ArticleRef = props =>(
    <div>
    <span>
    <h6>
    <Link href = '/Articles/[article]' as ={`/Articles/${props.id}`}>
        <li><a>{props.name}</a></li>
    </Link>
    </h6>
    </span>
    <div>
        {ArticleCut(props.text)}
    </div>
    </div>
);

export default ArticleList;