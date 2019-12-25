import React, {Component} from 'react';
import Header from '../components/Header/Header';
import Login from '../components/Login/Login';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import './../components/global.css';

class LoginData extends Component{
    render(){
      return(
        <div>
        <Header/>  
        <Login/>  
        </div>
      );
    }
}
  
  export default LoginData;
  