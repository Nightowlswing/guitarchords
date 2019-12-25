import React, { Component } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import '../../Styles/AddSong.css';
import { FormText } from 'reactstrap';
import Axios from 'axios';
import EditText from './EditText/editText';


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
        if (formValid(this.state.formErrors)) {
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
              //console.log(response.data)
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
                    value.length > 0
                        ?""
                        :"invalid compositors name";
                this.setState({cname: value});
                break;
            case 'sname':
                formErrors.sname = 
                    value.length > 0
                        ?""
                        :"invalid sons name";
                this.setState({sname: value});
                break;
            case 'capo':
                formErrors.capo = 
                    value.length < 16
                        ?""
                        :"invalid capo data";
                this.setState({capo: value});
            break;
            case 'genre':
                formErrors.genre = 
                    value.length > 0
                        ?""
                        :"invalid genre";
                this.setState({genre: value});
            break;
            case 'text':
                formErrors.text = 
                    value.length > 255
                        ?""
                        :"invalid text";
                this.setState({text: value});
            break;
            
        }   
    }
    
    componentDidMount(){
       // Axios.get('http://localhost:3210/allSongs').then ((response) => { this.setState({songs: response.data})});
    }
    render(){
        return(
 
            <div className = "whiteBlock">
                <form onSubmit = {this.handleSubmit}>
                    <LineInput onChange = {this.handleChange} type = 'compname' placeholder = 'Name of compositor' name = 'cname'/>
                    <LineInput onChange = {this.handleChange} type = 'songname' placeholder = 'Name of song' name = 'sname'/>
                    <LineInput onChange = {this.handleChange} type = 'capo' placeholder = 'Capo' name = 'capo'/>
                    <LineInput onChange = {this.handleChange} type = 'genre' placeholder = 'Genre' name = 'genre'/>
                    <Button divclassname = 'SingIn' buttonclassname = 'SubmitButton' type = 'submit' name = 'submit'/>
                    <TextInput onChange = {this.handleChange} classdiv = 'textblock' classtext = 'classtext' placeholder = "Song's Text" name = 'text'/>
                </form>
            </div>

        );
    }
   
}

const LineInput = props =>(
    <div className = {`${props.name}`}>
    <label className= 'FormLabel'>{props.name}</label><br/>
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