import React from "react";



export default class Title extends React.Component {

    render(){
        
       return (
           <div>
                Welcome! {this.props.title} Welcome!
            </div>    
       ); 
    }
}