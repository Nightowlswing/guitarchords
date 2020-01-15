import React, { Component } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import '../../Styles/AddSong.css';
import { FormText } from 'reactstrap';
import Axios from 'axios';
import EditText from './EditText/editText';
import '../../Styles/FormStyle/FormStyle.css';


const formValid = formErrors =>{
    let valid = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false)
    });

    return valid;
}

class AddSong extends Component{
    constructor(props){
        super(props)
        this.state = {
            cname: null,
            sname: null,
            capo: null,
            text: null,
            genre: null,
            status: null,
            formErrors:{
                cname: "",
                sname: "",
                capo: "",
                text: "",
                genre: ""
            }
        }
    } 
    
    handleSubmit = e => {
        e.preventDefault();
        //console.log(EditText(this.state.text));
        console.log(this.state.formErrors)
        if (formValid(this.state.formErrors)) {
            console.log(EditText(this.state.text));
            this.handleSongData(this.state.cname,this.state.sname,this.state.capo,EditText(this.state.text),this.state.genre)
          }
          else {
            alert('Songs data is INVALID');
          }
 
    };

    handleSongData (cname,sname,capo,text,genre){
        Axios.get('http://localhost:3210/addsong/', {
            params: {
                cname: cname,
                sname: sname,
                capo: capo,
                genre: genre,
                text: text
            }
            })
            .then( (response) => {
              console.log(response.data)
              document.querySelector('#songForm').innerHTML = response.data;
            }
            )
            .catch(function (error) {
                console.log(error);
            })
    }

    handleChange = e => {
        e.preventDefault();
        const {name, value} = e.target;
        let formErrors = this.state.formErrors;
        switch(name) {
            case 'cname':
                formErrors.cname = 
                    value.length > 0 & value.length < 64
                        ?""
                        :"invalid compositors name";
                this.setState({cname: value});
                break;
            case 'sname':
                formErrors.sname = 
                    (value.length > 0 & value.length <64)
                        ?""
                        :"invalid sons name";
                this.setState({sname: value});
                break;
            case 'capo':
                formErrors.capo = 
                    value.length < 64 & value.length >= 0
                        ?""
                        :"invalid capo data";
                this.setState({capo: value});
            break;
            case 'genre':
                formErrors.genre = 
                    value.length > 0 & value.length <64
                        ?""
                        :"invalid genre";
                this.setState({genre: value});
            break;
            case 'text':
                formErrors.text = 
                    value.length > 255 & value.length <8000
                        ?""
                        :"invalid text";
                console.log(value.length)
                this.setState({text: value});
            break;}
        this.setState({formErrors, [name]: value});
           
    }
    
    componentDidMount(){
       // Axios.get('http://localhost:3210/allSongs').then ((response) => { this.setState({songs: response.data})});
    }
    render(){
        return(
            
            <div className = "whiteBlock">
                <Instruction/>

                <span id = 'songForm' ></span>
                <form onSubmit = {this.handleSubmit}>
                    <LineInput onChange = {this.handleChange} type = 'compname' label = 'Name of compositor' name = 'cname' placeholder = 'Ed Sheeran'/>
                    <LineInput onChange = {this.handleChange} type = 'songname' label = 'Name of song' name = 'sname' placeholder = 'Perfect'/>
                    <LineInput onChange = {this.handleChange} type = 'capo' label = 'Capo' name = 'capo' placeholder = '1 fret'/>
                    <LineInput onChange = {this.handleChange} type = 'genre' label = 'Genre' name = 'genre' placeholder = 'pop-folk'/>
                    <Button divclassname = 'SingIn' buttonclassname = 'SubmitButton' name = 'submit' name = 'submit' placeholder = ''/>
                    <TextInput onChange = {this.handleChange} classdiv = 'textblock' label = 'classtext' placeholder = "Song's Text" name = 'text' placeholder = "Song text"/>
                </form>
            </div>

        );
    }
   
}

const Instruction = props =>(
    <div>
        <text>
            Hi!<br/> Here's some rules for you to help you input your song correctly<br/>
            <h4>1</h4>You should write your chords in the text using [...]<br/>
            <h4>2</h4>First - chord, then words<br/>
            <h4>3</h4>Mark all 'nextlines' with $<br/>
            <h4>4</h4>Mark the next verse with @<br/>
        </text>
        <h4>expample</h4>
        <img className ='exImg' src = '../../static/ex1.jpg'></img><br/>translates into this<br/>
        <img className ='exImg' src = '../../static/ex2.jpg'></img>
        
    </div>
);

const LineInput = props =>(
    <div className = {`${props.name} formdiv`}>
    <label className= 'FormLabel'>{props.label}</label><br/>
    <input 
    type = {`${props.type}`}
    className = 'FormInput' 
    placeholder = {`${props.placeholder}`}
    name = {`${props.name}`}
    noValidate
    onChange ={props.onChange}
    />
</div>

);

const TextInput = props =>(
    <div className = {`${props.classdiv}`}>
        <textarea onChange ={props.onChange} className = {`${props.classtext}`} name="text" placeholder = {`${props.placeholder}`} cols="100" rows="40"/>
    </div>
);

const Button = props => (
    <div className = {`${props.divclassname}`}>
      <button className = {`${props.buttonclassname}`} type = {`${props.type}`}>{props.name}</button>
    </div>
  )

export default AddSong;