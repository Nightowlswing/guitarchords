import React, {Component, createElement} from 'react';
import './SongStyle/SongStyle.css';
import Axios from 'axios';



class Song extends Component{
      constructor(props){

        super(props)
        this.state = {
          song: [],
          data: null
        }
      }     
      
     

      componentDidMount(){
        var dir = window.location.pathname.substr(1);
        const sId = parseInt(dir,10);
        console.log()
        Axios.get('http://localhost:3210/song', {
          params: {
            id: sId
            
          }
          
        }).then ((response) => { 
          this.setState({song: response.data});
          //console.log(song.response.data);
        });   
      }
      render(){
        
       // const router = useRouter()
        //const {id} = router.query
      return(
        <div className = "songText">                
                {
                this.state.song.map((value) => {
                    return (
                      <div>
                        <SongHead compName = {this.state.song[0].cname} name = {this.state.song[0].name} capo = {`${this.state.song[0].capo}`}/>
                        <SongText
                        text = {value.text}
                        />
                      </div>
                    );
                })
                }
                
                ;
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
