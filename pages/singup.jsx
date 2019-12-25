import React, {Component} from 'react';
import Header from '../components/Header/Header';
import Singup from '../components/Login/Singup';
//import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/global.css';
class LoginData extends Component{
    render(){
      return(
        <div>
        <Header/>  
        <Singup/>  
        </div>
      );
    }
}
  
  export default LoginData;