const Sub = (props) => {
        console.log('props',props)
    return(
        <div>
             <p> This is a Sub component </p>
             <p>   Subtration  ={parseInt(props.a)-parseInt(props.b)}</p>
            </div>

    )
}

export default Sub;