import React from "react";
import Article from "../components/Article";

export default class About extends React.Component {
    render(){
        const Articles = [
            " Aboutus #1",
            " Aboutus #2",
            " Aboutus #3",
            " Aboutus #4",
            " Aboutus #5",
            " Aboutus #6",            
            " Aboutus #66",
        ].map((title, i) => <Article key={i} title={title} />);
        const { query } = this.props.location;        
        const { params } = this.props;
        const { article } = params;
        const { date, filter } = query;     
        return (
              <div>
                <h1>About us</h1>
                article:{article}, date:{date}, filter:{filter}
                <div class="row">{Articles}</div>
              </div>            
        );
    }
}