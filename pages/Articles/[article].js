import React, {Component} from 'react';
import Header from '../../components/Header/Header';
import Article from '../../components/Articles/Article';
import '../../Styles/global.css';
import { useRouter, Router } from 'next/router'



class article extends Component{

  render(){
      return(
        <div>
            <Header/>
            <Article/>
        </div>
      );
    }
    
}
  
  export default article;