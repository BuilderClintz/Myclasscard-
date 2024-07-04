function Button(props){
    return <button style={{backgroundColor: props.color}}>
      {props.data}
      {props.emoji}
    </button>    
}
export default Button