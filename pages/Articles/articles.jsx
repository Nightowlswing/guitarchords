import React, {Component} from 'react';
import Header from '../../components/Header/Header';
import ArticleList from '../../components/Articles/ArticleList';
import '../../Styles/global.css';
import { useRouter, Router } from 'next/router'
import Link from 'next/link';
import '../../Styles/PropStyles/LinkButtonStyle.css';


class comp extends Component{

  render(){
      return(
        <div>
            <Header/>
                  
                <Link href='./addarticle'>
                    <a className = 'ButtonRef'>add article</a>
                </Link>

            <ArticleList/>      
        </div>
      );
      
    }
    
}
  export default comp;