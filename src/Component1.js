import React from "react";
export default class Component1 extends React.Component{
    handleClick(){
        alert("You Clicked");
    }
    render(){
        return(
            <div>
                <h1>This is Class Component</h1>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
            
        )
    }
}