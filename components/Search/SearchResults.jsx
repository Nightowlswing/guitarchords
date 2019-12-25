import React, {Component, createElement} from 'react';
//import '../../Styles/SongStyle/SongStyle.css';
import Axios from 'axios';
import Link from 'next/link';
import EditDir from './EditDir/EditDir'; 

class SearchResault extends Component{
    constructor(props){
        super(props)
        this.state = {
            compositors: [],
            songs:[],
            alrticles:[],
            Compositors: false,
            Songs: false,
            Articles: false
        }
    }

    handleClick = e =>{
        e.preventDefault();
        const {name, value} = e.target;

        if(this.state.name){
            e.target.style.backgroundColor = '#60f78a';
            this.setState({name: false})
            
            document.getElementById(name).style.display = 'none';
        }
        else{
            e.target.style.backgroundColor = '#8fffae';
            this.setState({name: true})
            document.getElementById(name).style.display = 'block';
        }
    }
    componentDidMount(){
        const dir = EditDir(window.location.pathname);
        
        Axios.get('http://localhost:3210/searchC',{params: { Q: dir }}).then ((response) => { this.setState({compositors: response.data})});
    }
    render(){
        return(
            <dib>
                <Button  divclassname = 'check' buttonclassname = 'checkButton' type = 'button' name = 'Songs' onClick = {this.handleClick}/>
                    <Button  divclassname = 'check' buttonclassname = 'checkButton' type = 'button' name = 'Compositors' onClick = {this.handleClick}/>
                    <Button  divclassname = 'check' buttonclassname = 'checkButton' type = 'button' name = 'Articles' onClick = {this.handleClick}/>
                <div id = 'Compositors'>
                <ul>
                    {this.state.compositors.map((value) => {
                        return (
                            <SongRef
                            id = {value.id}
                            cname = {value.cname}
                            />
                        );
                    })}
                </ul>
                </div> 
                <div id = "Songs">
                    Songs
                </div>
                <div id = "Articles"> 
                    Articles
                </div>

            </dib>
            
        );
    }

    
    
}

const Button = props => (
    <div className = {`${props.divclassname}`}>
      <button name ={`${props.name}`} className = {`${props.buttonclassname}`} type = {`${props.type}`}  onClick = {props.onClick}>{props.name}</button>
    </div>
  )

const SongRef = props =>(
    <Link href = '/CompPages/[comp]' as ={`/CompPages/${props.id}`}>
        <li><a>{props.cname}</a></li>
    </Link>
);

export default SearchResault;