import React, { Component } from 'react'
import '../../Styles/global.css'

export default class Main extends Component{
    render(){
        return(
            <div>
            <div>
                <img src = '../../static/logo.png'/><h3>Hi! I'm Vlad</h3><img src = '../../static/logo.png'/>
                <div>
                    I created this 'masterpiece' for two main reasons:
                    <h6>My coursework from Web and DB :)</h6>
                    <h6>I need some peacefull place to store songs chords</h6>
                    If somebody somewhere will gonna need this 'website' for some reason, you're welcome
                </div>
            </div>
                <style jsx>{`
                        div{
                            margin-left: auto;
                            margin-right: auto;
                            width: 1000px;
                        }
                      
                `}</style>
            </div>
        );
        
    }
}