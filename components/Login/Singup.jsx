import React, { Component } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import LoginStyle from '../../Styles/LoginStyle/LoginStyle.css';
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



const emeilRegex = RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);


class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: null,
            password: null,
            nickname: null,
            formErrors:{
                email: "",
                nickname: "",
                password: ""
            }
        };

    }

    handleSubmit = e => {
        e.preventDefault();
       // this.setState({isWaiting: true}); 
        //alert('e = ' + this.state.formErrors.email + ' p = ' + this.state.formErrors.password+' n = '+this.state.formErrors.nickname);
        if (formValid(this.state.formErrors)) {
          this.handleUserData(this.state.email,this.state.nickname,this.state.password)
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
                        value.length < 6
                            ?'minimum 6 characters'
                            : "";
                    this.setState({password: value});
                break;
            case 'Nickname':
                formErrors.nickname = 
                value.length > 3
                        ?'minimum 0 characters'
                        : "";
                this.setState({nickname: value});
            break;
        }
       
        this.setState({formErrors, [name]: value});
    }
    
    handleUserData(email, nick, pass){
      Axios.get('http://localhost:3210/singup', {
        params: {
            email: email,    
            nickname: nick,
            password: pass
        }
        })
        .then( (response) => {
          console.log(response.data[0])
        if(response.data[0] == undefined)
            {alert('User has been created')}
          else{
             alert('Operation failed. User already exists')
         }
        }
        )
        
    }


    render(){
        return(
            <div className = 'SingIn'>
                

                <form onSubmit = {this.handleSubmit} onChange = {this.handleChange} noValidate>
                  <Input onChange = {this.handleChange} name = 'Email' placeholder = 'user@mail.com' type = 'email'/>
                  <Input onChange = {this.handleChange} name = 'Password' placeholder = '••••••••' type = 'password'/>
                  <Input onChange = {this.handleChange} name = 'Nickname' placeholder = 'superguitarist228' type = 'nickname'/>
                  <Button divclassname = 'SingIn' buttonclassname = 'SubmitButton' type = 'submit' name = 'sing up'/>
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


export default Login;