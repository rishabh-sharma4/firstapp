import React from "react";
export default class ComponentC extends React.Component{
    handleClick(){
        document.getElementById("ab").innerHTML+=this;
    
    }
    render(){
        return(
            <div>
                <p id="ab"></p>
                <h1>Event handling in React</h1>
                {/* {this is onclick event on button element so this refers to object/component} */}
                <button onClick={()=>this.handleClick()}>Click Here</button>
                <button onClick={this.handleClick.bind(this)}>Click Here</button>
                <button onClick={this.handleClick}>Click Here</button>
                
               
            </div>
        )
    }
} 

