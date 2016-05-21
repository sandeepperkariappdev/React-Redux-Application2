import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router";
import  Header from "./Header";
import Footer from "./Footer";
export default class Layout extends React.Component{
    
    constructor(){
        super();   
        this.state = { name : "Sandeep" };
    }
    changeTitle(title){
           this.setState({ title }); 
        };
    render(){  
        const title = "Sandeep Perkari";
        
        
        
        setTimeout( () => {
            this.setState({ name : "Sandeep Perkari"})
        }, 2000);
        return (            
           <div>  
                {this.state.name} "  rtrewter  "
            {this.state.title}
                <Header changeTitle = {this.changeTitle.bind(this)} title={title} />
                
                <Footer />
            </div>
        );
    }
}
