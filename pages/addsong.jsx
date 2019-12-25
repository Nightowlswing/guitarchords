import React, {Component} from 'react';
import '../Styles/global.css';
import Header from '../components/Header/Header';
import AddSong from '../components/AddSong/AddSong';

class LoginData extends Component{
    render(){
      return(
        <div>
        <Header/>  
        <AddSong/>
        </div>
      );
    }
}
  
  export default LoginData;
  