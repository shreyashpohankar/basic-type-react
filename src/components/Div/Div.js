const Div = (props) => {
    console.log('props',props)
return(
    <div>
         <p> This is a Div component </p>
         <p>   Division  ={parseInt(props.a)/parseInt(props.b)}</p>
        </div>

)
}

export default Div;