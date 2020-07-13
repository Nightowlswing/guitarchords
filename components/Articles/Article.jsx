import React, {Component, createElement, useState, useEffect} from 'react';
import Axios from 'axios';
import Link from 'next/link';
import EditDir from '../Search/EditDir/EditDir';
import {ARTICLE} from '../urls';
import Loader from 'react-loader-spinner'

function Article(){
    const [article, setArticle] = useState(undefined)
    useEffect(() => {
    var dir = EditDir(window.location.pathname);
    Axios.get(ARTICLE + dir + '').then((response) => setArticle(response.data));      
    })
    if(article !== undefined){
        return(
            <div className = "articleText">                
                <div>
                    <ArticleHead name = {article.name} />
                    <ArticleText text = {article.text}/>
                </div>
                <style jsx>{`
                    div{
                        padding: 10px;
                    }
                `}</style>
            </div>
        );
    }
    else{
        return(<Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}/>);
    }

}
  
const ArticleHead = props =>(
    <div className = {props.className}>
        <span><h1>{props.name}</h1></span>
    </div>
);

const ArticleText = props =>(
  <div className = {props.className}>
    {props.text}
  </div>
)

export default Article;
