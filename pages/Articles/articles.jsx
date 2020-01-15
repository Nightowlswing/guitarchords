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
              <div className = 'littleHeader'>
                {/* <span className = 'addNew'>Articles</span> */}
                  <Link href='./addarticle'>
                      <a className = 'addNew'>add article</a>
                  </Link>
              </div>
            <ArticleList/>      
        </div>
      );
      
    }
    
}
  export default comp;