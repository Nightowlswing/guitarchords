import React, {Component} from 'react';
import '../../Styles/global.css';
import Header from '../../components/Header/Header';
import AddArticle from '../../components/AddArticle/AddArticle';

class LoginData extends Component{
    render(){
      return(
        <div>
        <Header/>  
        <AddArticle/>
        </div>
      );
    }
}
  
  export default LoginData;
  