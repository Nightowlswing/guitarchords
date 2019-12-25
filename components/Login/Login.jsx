//import { store } from 'react-notifications-component';
import React, { Component } from 'react'
import Link from 'next/link';
//import '../../styles/FormStyles/Form.css';
import { useRouter } from 'next/router';
import LoginStyle from './LoginStyle/LoginStyle.css';
import { FormText } from 'reactstrap';
import Axios from 'axios';
import {connect} from 'react-redux';

const formValid = formErrors =>{
    let valid = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false)
    });

    return valid;
}



const emeilRegex = RegExp(/[a-zA-Z_]$/);


class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: null,
            password: null,
            formErrors:{
                email: "",
                password: ""
            },
            isWaiting: false,
        };

    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({isWaiting: true}); 

        setTimeout(() => {
            this.setState({isWaiting: false});
        }, 2000)

        if (formValid(this.state.formErrors)) {
            
          console.log(this.state.email)
          this.handleUserData(this.state.email,this.state.password)
        }
        else {
          alert('FORM IS INVALID');
        }
    };

    handleChange = e => {
        e.preventDefault();
        const {name, value} = e.target;
        let formErrors = this.state.formErrors;

        switch(name) {
            case 'Email':
                formErrors.email = 
                    emeilRegex.test(value) && value.length > 6
                        ?""
                        :'invalid email';
                this.setState({email: value});
                break;
            case 'Password':
                    formErrors.password = 
                        value.length < 6 && value.length > 0 
                            ?'minimum 6 characters'
                            : "";
                    this.setState({password: value});
                break;
        }
       
        this.setState({formErrors, [name]: value});
    }
    
    handleUserData(email, pass){
      Axios.get('http://localhost:3210/login', {
        params: {
            email: email,
            password: pass
        }
        })
        .then( (response) => {
          console.log(response.data)
          if(response.data[0] !== undefined)
            {console.log('it returns!')}
          else{
            {console.log('No users mafaka')}
          }
        }
        )
        .catch(function (error) {
            console.log(error);
        })
    }


    render(){
        return(
            <div className = 'SingIn'>
                

                <form onSubmit = {this.handleSubmit} onChange = {this.handleChange} noValidate>
                  <Input onChange = {this.handleChange} name = 'Email' placeholder = 'user@mail.com' type = 'email'/>
                  <Input name = 'Password' placeholder = '••••••••' type = 'password'/>
                  <Button divclassname = 'SingIn' buttonclassname = 'SubmitButton' type = 'submit' name = 'sing in/sing up'/>
                </form>
                
            </div>

        );
    }
  }


const Input = props => (
  <div>
    
    <div className = {`${props.name}`}>
        <label className= 'FormLabel'>{props.name}</label><br/>
        <input 
        type = {`${props.type}`}
        className = 'FormInput' 
        placeholder = {`${props.placeholder}`}
        name = {`${props.name}`}
        noValidate
        onChange ={props.handleChange}
        />
    </div>
  </div>
  );

  const Button = props => (
    <div className = {`${props.divclassname}`}>
      <button className = {`${props.buttonclassname}`} type = {`${props.type}`}>{props.name}</button>
    </div>
  )


export default connect(mapStateToProps)(Login);