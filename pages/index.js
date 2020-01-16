import React, {Component} from 'react';

import Header from '../components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../Styles/global.css';

import Main from '../components/Main/Main';

class Index extends Component{
    render(){
      return(
        <div>
        <Header/> 
        <Main/>
        </div>
      );
    }
    
}
  
  export default Index;
  