import React, { Component } from 'react';
import Link from 'next/link';
import logo from '../../static/logo.png';
import search from '../../static/search.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/HeaderStyle/HeaderStyle.css';
import $ from 'jquery';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import EditQuery from './EditQuery/EditQuery';


class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            Search: ""
        };
    }

    openSlideMenu = e => {
        // e.preventDefault();
        document.querySelector("#side-menu").style.width = "250px";
       // document.querySelector("body").style.marginLeft = "250px";
        
    }

    closeSlideMenu = e => {
        // e.preventDefault();
       
        document.querySelector("#side-menu").style.width = "0px";
       // document.querySelector("body").style.marginLeft = "0px";
        
    }


    handleChange = e =>{
        e.preventDefault();
        const {name, value} = e.target;
        this.setState({Search: EditQuery(value)});
        console.log(this.state.Search);
    }

    render(){
        return(
            
            <div >
                <nav className = 'navbar'>
                    <div className = 'container-fluid'>
                    <SideMenu onClick = {this.closeSlideMenu}/>
                    <Burger onClick = {this.openSlideMenu}/>
                    <Menu/>
                    {/* <Ref link = './addsong' text = 'add new song'/>
                    <Ref link = './login' text = 'sing in'/>
                    <Ref link = './singup' text = 'sing up'/> */}
                    <SearchBox onChange = {this.handleChange} search = {this.state.Search}/>
                    </div>
                </nav>

                <style jsx>{`
                    .navbar{
                        background: #82A3A1;
                    }
                `}</style>
            </div>
        );
    }
}

const SingedOut = props =>(
    <div>
        <Ref link = './login' text = 'sing in'/>
        /
        <Ref link = './singup' text = 'sing up'/>
    </div>
);

const SingOut = props =>(
    <div>
        <Ref link = './addsong' text = 'add new song'/>
        <Ref link = './profile' text = 'sing up'/>
        <Ref link = './' text = 'log out'/>
    </div>
);

const Logo = props => (
    <div className = ''>
        <Link href = '#'>
            <a className = 'navbar-brand'>
                        <img src={logo} alt = 'logo'/>
            </a>
        </Link>

        
    </div>
);

const MenuButton = props =>(
    <Link href = {`${props.href}`}>
        <li className = 'nav-item'><a className = 'nav-link'>{`${props.name}`}</a></li>    
    </Link>
);

const Menu = props =>(
    <ul className = 'nav'>
        <MenuButton name = 'Main' href = '/'/>
        <MenuButton name = 'Songs' href = '/songs'/>
        <MenuButton name = 'Compositors' href = '/CompPages/comps'/>
        {/* <MenuButton name = 'Chords' href = '#'/> */}
        <MenuButton name = 'Articles' href = '/Articles/articles'/>
        
    </ul>

    
);

const SearchBox = props =>(
    <div className="searchBox">
        
        <div id = 'group' className="input-group"> 
            <input onChange = {props.onChange} type="text" className="form-control" name="x" placeholder="Search"/>
            <span className="input-group-btn">
                <button  className = 'searchButton' type="button">
                    <span className="glyphicon glyphicon-search"></span>                    
                    <Link href='/SearchPages/[search]' as = {`/SearchPages/${props.search}`}>
                        <a>search</a>
                    </Link>
                </button>
            </span>
        </div> 
    </div>

);

const Burger = props =>(
    <span className ="open-slide">
        <a href="#" onClick = {props.onClick}>
            <svg width = "30" height = "30">
                <path d = "M0, 5, 30, 5" stroke = "#fff" strokeWidth="5"/>
                <path d = "M0, 14, 30, 14" stroke = "#fff" strokeWidth="5"/>
                <path d = "M0, 23, 30, 23" stroke = "#fff" strokeWidth="5"/>
            </svg>
        </a>
    </span>
    
);

const SideMenu = props =>(
    <div id = "side-menu" className = "side-nav">
        <a href="#" className = "btn-close" onClick = {props.onClick}>&times;</a>
        <MenuButton name = 'Main' href = '/'/>
        <MenuButton name = 'Songs' href = '/songs'/>
        <MenuButton name = 'Compositors' href = '/CompPages/comps'/>
        <MenuButton name = 'Articles' href = '/Articles/articles'/>
    </div>
);

const Ref = props =>(
    <Link href = {`/${props.link}`}>
        <a>{props.text}</a>
    </Link>
)


export default Header;


