const Mul = (props) => {
    console.log('props',props)
return(
    <div>
         <p> This is a Div component </p>
         <p>   Multiplication  ={parseInt(props.a)*parseInt(props.b)}</p>
        </div>

)
}

export default Mul;