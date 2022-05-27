import React from 'react';
import ComponentD from './ComponentD';

export default class ComponentA extends React.Component{
    constructor(){
        super();
        console.log("Constructor")
        this.state={
            name: "Enter your name",
            dataShow: true
        };
    }
    updateName(){
        this.setState({name: "Rishabh Sharma"})
    }
    deleteAboveData(){
        this.setState({dataShow: false});
    }
    
    /* static getDerivedStateFromProps(props, state){
         console.log("getderivedstatefromprops");
         return{name: props.name};
        
     } */

    componentDidMount(){
        console.log("ComponentDidMount")
    }

    shouldComponentUpdate(){
        console.log("souldcomponentupdate");
        return true; 
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("Before update name was", prevState.name);
        return null;
    }
    componentDidUpdate(){
        console.log("ComponentDidUpdate", this.state.name);
    }
    render(){
        return(
            <div>
                {this.state.dataShow ? <div><ComponentD/>{this.state.name}</div>:undefined}
                <button onClick={this.deleteAboveData.bind(this)}>Delete Data</button>
                <button onClick={this.updateName.bind(this)}>Update Name</button>

                {console.log("render")}
            </div>
        )
    }
}