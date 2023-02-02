type InputProps = {
  value: string;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const Input = (props: InputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  return (
    <input value={props.value} onChange={handleInputChange} type="text"></input>
  );
};

export default Input;
