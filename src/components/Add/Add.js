const Add = (props) => {
    console.log('props',props)
    return(
        <div>
             <p> This is a Add component </p>
             <p> Addition ={parseInt(props.a)+parseInt(props.b)}</p>
            </div>

    )
}

export default Add;