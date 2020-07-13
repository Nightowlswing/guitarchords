import React, {createElement,useState, useEffect} from 'react';
import '../../Styles/SongStyle/SongStyle.css';
import Axios from 'axios';
import {SONG} from '../urls';
import Loader from 'react-loader-spinner'

function Song(props){
	const [song, setSong] = useState(null);
    useEffect(()=>{
		var dir = window.location.pathname.substr(1);
		const sId = parseInt(dir,10);
		Axios.get(SONG + sId + '').then((response) => setSong(response.data));      
    })
    if(song !==  null){
            return(
					<SongView
						song = {song}
					/>
                
              );
            }
    else{
      	return (<Loader
					type="Puff"
					color="#00BFFF"
					height={100}
					width={100}
					timeout={3000} 
				/>);
    }
}

function SongView(props){
	const songName = props.song.name;
	const songCompositor = props.song.cname;
	const songCapo = props.song.capo;
	const songText = props.song.text;
    return(
		<div className = "songText"> 
			<SongHead compName = {songCompositor} name = {songName} capo = {songCapo}/> 
			<SongText text = {songText}/>
		</div>
	);
}
  
const SongHead = props =>(
    <div>
        <span><h1>{props.compName}</h1>
        <h3>{props.name}</h3></span>
        <span><h6>Capo: {props.capo}</h6></span>
        <span>----------------------------</span>
    </div>
);

const SongText = props =>{
	let text = props.text;
	text = JSON.parse(
		text
	)
	return (
		<div>
			{text.map((value, index) => {
			return(
				<SongVerse verse = {value}/>
			);
			})}
		</div>
)}

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
