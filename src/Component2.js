const Component2=()=>{
    const handleClick=()=>{
        alert("You clicked");
    }
    return(
        <div>
            <h1>This is functional component</h1>
            <button onClick={()=>{handleClick()}}>Click me</button>
        </div>
    )
}
export default Component2;