import React, {Component} from 'react';
import Header from '../../components/Header/Header';
import Compositor from '../../components/Compositors/Compositor';
import '../../Styles/global.css';
import { useRouter, Router } from 'next/router'



class comp extends Component{

  render(){
      return(
        <div>
            <Header/>
            
            <Compositor/>
            
        </div>
      );
      
    }
    
}
  export default comp;