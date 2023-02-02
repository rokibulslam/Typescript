type GreetProps = {
    name: string;
    messageCount: number;
    isLoggedIn: boolean;
}
const Greet = (props:GreetProps) => {
  return (
    <div>
      <h1>Showing Props</h1>
      <h2>{props.name}</h2>
    </div>
  );
}

export default Greet