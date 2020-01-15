import React, {Component} from 'react';
import { render } from 'react-dom';
import Header from '../components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardText, CardHeader, CardBody, Button } from 'reactstrap';
import '../Styles/global.css';
import Link from 'next/link';
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
  