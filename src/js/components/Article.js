import React from "react";

export default class Article extends React.Component {
    render(){
        const { title } = this.props;
        
        return (
            <div class="col-md-4">
                <h2>{title}</h2>
                <p>sadlhfios sadhfoida qowhwX  OUU asd sansdeep is great  sandeep is great</p>
                <a class="btn btn-default" href="#">More Info</a>
            </div>
        );        
    }
}