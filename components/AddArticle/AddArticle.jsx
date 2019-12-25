import React, { Component } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import '../../Styles/AddSong.css';
import { FormText } from 'reactstrap';
import Axios from 'axios';
import EditArticle from './EditArticle/EditArticle';

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
            name: null,
            text: null,
            formErrors:{
                name: "",
                text: ""
            }
        }
    } 
    
    handleSubmit = e => {
        e.preventDefault();
        //console.log(EditText(this.state.text));
        if (formValid(this.state.formErrors)) {
            this.handleSongData(this.state.name,EditArticle(this.state.text))
          }
          else {
            alert('Article data is INVALID');
          }
 
    };

    handleSongData (name,text){
        Axios.get('http://localhost:3210/addArticle/', {
            params: {
                name: name,
                text: text
            }
            })
            .then( (response) => {
              console.log(response.data)
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
            case 'name':
                formErrors.cname = 
                    value.length > 0
                        ?""
                        :"invalid articls name";
                this.setState({name: value});
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
    
    render(){
        return(
 
            <div className = "whiteBlock">
                <form onSubmit = {this.handleSubmit}>
                    <LineInput onChange = {this.handleChange} placeholder = 'Name of article' name = 'name'/>
                    <Button divclassname = 'SingIn' buttonclassname = 'SubmitButton' type = 'submit' name = 'submit'/>
                    <TextInput onChange = {this.handleChange} classdiv = 'textblock' classtext = 'classtext' placeholder = "article text" name = 'text'/>
                </form>
            </div>

        );
    }
   
}

const LineInput = props =>(
    <div className = {`${props.name}`}>
    <label className= 'FormLabel'>{props.name}</label><br/>
    <input 
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