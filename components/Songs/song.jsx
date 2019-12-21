import React, {Component, createElement} from 'react';
import './SongStyle/SongStyle.css';
import Axios from 'axios';
import { useRouter } from 'next/router'


class Song extends Component{
      constructor(props){

        super(props)
        this.state = {
          song: [],
          data: null
        }
      }     
      
      componentDidMount(){
        //const router = useRouter()
        //console.log(router.query)
        Axios.get('http://localhost:3210/song', {
          params: {
            id:1
          }
          
        }).then ((response) => { 
          this.setState({song: response.data})});   
      }
      render(){
       // const router = useRouter()
        //const {id} = router.query
      return(
        <div className = "songText">
            <SongHead compName   = 'Billie Eilish' name = 'All The Good Girls Go to Hell' capo = '4th fret'/>
            {/* <button onClick = {this.GetProfiles.bind(this)}/> */}
            
                {this.state.song.map((value) => {
                    return (
                        <SongText
                        text = {value.text}
                        />
                    );
                })}
        </div>
      );
    }
    
}
  
const SongHead = props =>(
    <div>
        <span><h1>{props.compName}</h1>
        <h3>{props.name}</h3></span>
        <span><h6>Capo: {props.capo}</h6></span>
        <span>----------------------------</span>
    </div>
);

const SongText = props =>(
  <div>
    {props.text.map((value, index) => {
      return(
        <SongVerse verse = {value}/>
      );
    })}
  </div>
)

const SongVerse = props =>(
    <div>
      {props.verse.map((value,index)=>{
        return (
          <SongLine line = {value}/>
        );
      })}
      <br/><br/>
    </div>
);

const SongLine = props =>(
  <div>
    <span>
    {props.line.map((value,index) =>{
      return(
        <WordBlock words = {value.words} chord = {value.chord}/>
      );
    })}

    </span>
    <br/>
  </div>
);

const WordBlock = props =>(
  <div className = "word">
    {props.chord}<br/>
    {props.words}&nbsp;
    <br/>
  </div>
);
export default Song;

