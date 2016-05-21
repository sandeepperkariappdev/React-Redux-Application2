import React from "react";
import { Link } from "react-router";
import Title from "./Header/Title";

export default class Header extends React.Component {
    
    handleChange(e){
        this.props.changeTitle(e.target.value);
    }
    render(){
        return ( 
            <div>
                <Title title = {this.props.title} />  
                <input onChange={this.handleChange.bind(this)} />                               
            </div>
        );
    }
}