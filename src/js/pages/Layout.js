import React from "react";
import { Link } from "react-router";
import Nav from "../components/layout/Nav";
export default class Layout extends React.Component{
    navigate(){
        //this.props.history.pushState doesn't work
        //console.log(this.props);
            //this does have the browser back button work
            //this.props.history.replaceState(null, "/");            
            //this.props.router.push("/");
         // this.props.history.replace("/");
        
        }
    render(){        
        const { location } = this.props;
        const containerStyle = {
            marginTop: "60px"
        }
        return (            
            <div>  
                <Nav location = { location } />
                <div class="container theme-showcase" role="main" style={ containerStyle }>
                    <div class="row"></div>
                    <div>{this.props.children}</div>                                       
                </div>                
            </div>
        )
    }
}
/*
{this.props.children}
<button onClick={this.navigate.bind(this)}>Home</button>
<Link to="about"> About</Link>
<Link to="contact" class="btn btn-success">Contact</Link> 
*/