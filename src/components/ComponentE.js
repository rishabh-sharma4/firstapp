import { useState } from "react"

export default function ComponentE(props){
    const[name,setName]= useState("Rishabh");
    const handleClick=()=>{
        alert("clicked");
    }
    return(
        <>
        <h1 style={{color:"red"}}>hello {name} you are {props.age} years old in {props.year}</h1>
        <p>Address: {props.address.hno}, Pin: {props.address.pincode}</p>
        <button onClick={handleClick}>click</button>
        <button onClick={()=>{handleClick()}}>click</button>
        <button onClick={()=>{setName("Rishabh Sharma")}}>Change Name</button>
        </>
    )
}