import React, {Component, createElement} from 'react';
import Axios from 'axios';
import Link from 'next/link';
import EditDir from '../Search/EditDir/EditDir';


class Article extends Component{
      constructor(props){

        super(props)
        this.state = {
            article: []
        }
      }     
      
     

      componentDidMount(){
        var dir = EditDir(window.location.pathname);

        
        Axios.get('http://localhost:3210/article', {
          params: {
            id: dir
            
          }
          
        }).then ((response) => { 
          this.setState({article: response.data});
          console.log(response.data)
        });   
      }
      render(){
        
       // const router = useRouter()
        //const {id} = router.query
      return(
        <div className = "articleText">                
                {
                this.state.article.map((value) => {
                    return (
                      <div>
                        <ArticleHead name = {this.state.article[0].name} />
                        <ArticleText text = {`${this.state.article[0].text}`}/>
                      </div>
                    );
                })
                }
                
        </div>
      );
    }
    
}
  
const ArticleHead = props =>(
    <div className = {props.className}>
        <span><h1>{props.name}</h1></span>
    </div>
);

const ArticleText = props =>(
  <div className = {props.className}>
    {props.text}
  </div>
)

export default Article;
