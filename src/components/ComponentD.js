import React from 'react'
export default class ComponentD extends React.Component{
    componentWillUnmount(){
        alert("The component has been deleted");
    }
    render(){
        return React.createElement("h1", null, "Hello from");
        
    }
}