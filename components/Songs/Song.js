import React, {Component, createElement} from 'react';
import './SongStyle/SongStyle.css';
import Axios from 'axios';


class Song extends Component{
      constructor(props){
        super(props)
        this.state = {
          tracks: []
        }
      }

      
      
      GetProfiles() {
        console.log(this.state);
        Axios.get('http://localhost:3210/profile').then ((response) => { this.setState({tracks: response.data})});
        console.log(this.state.tracks);
      }
      render(){
        
      return(
        <div>
            {/* <SongHead compName = 'Billie Eilish' name = 'All The Good Girls Go to Hell' capo = '4th fret'/> */}
            <button onClick = {this.GetProfiles.bind(this)}/>
                {this.state.tracks.map((value) => {
                    return (
                        <SongText
                            adress = {value.adress}
                            avatar = {value.avatar}
                            email = {value.email}
                            id = {value.id}
                            name = {value.name}
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
    <span>{`adress: ${props.adress}`}</span><br/>
    <span>{`avatar: ${props.avatar}`}</span><br/>
    <span>{`email: ${props.email}`}</span><br/>
    <span>{`id: ${props.id}`}</span><br/>
    <span>{`name: ${props.name}`}</span><br/>
  </div>
)

export default Song;

