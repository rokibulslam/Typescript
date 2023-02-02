type ButtonProps = {
    onClick: (e:React.MouseEvent<HTMLButtonElement>, id:number) => void;
}
const Button = (props:ButtonProps) => {
  return (
    <button onClick={(e)=>{props.onClick(e, 1)}}></button>
  )
}

export default Button