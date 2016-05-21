import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component{
    constructor(){
        super()
        this.state = {
          collapsed: true  
        };
    }
    
    toggleCollapse(){
        const collapsed = !this.state.collapsed;
        this.setState({collapsed});
    }
    
    render(){
        const { location } = this.props;
        const { collapsed } = this.state;
        const homeClass = location.pathname === "/" ? "active" : "";
        const aboutClass = location.pathname.match(/^\/about/) ? "active" : "";
        const contactClass = location.pathname.match(/^\/contact/) ? "active" : "";
        const navClass = collapsed ? "collapse" : "";
        return (
          <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)}>
                          <span class="sr-only">Toggle navigation</span>
                          <span class="icon-bar"></span>
                          <span class="icon-bar"></span>
                          <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">ReactRedux</a>
                     </div>
                      <div class={"navbar-collapse " + navClass}>
                        <ul class="nav navbar-nav">
                          <li class={homeClass}>
                             <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}> Home </IndexLink>
                          </li>
                          <li>
                             <Link to="about" onClick={this.toggleCollapse.bind(this)}>About</Link>
                          </li>
                          <li>
                            <Link to="contact" onClick={this.toggleCollapse.bind(this)}>Contact</Link>
                          </li>
                          
                        </ul>
                      </div>
                </div>
              </div>);
    }
};

/*<li class="dropdown">
    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <span class="caret"></span></a>
    <ul class="dropdown-menu" role="menu">
      <li><a href="#">Action</a></li>
      <li><a href="#">Another action</a></li>
      <li><a href="#">Something else here</a></li>
      <li class="divider"></li>
      <li class="dropdown-header">Nav header</li>
      <li><a href="#">Separated link</a></li>
      <li><a href="#">One more separated link</a></li>
    </ul>
</li>*/