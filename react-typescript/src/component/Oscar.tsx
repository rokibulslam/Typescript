type OscarProps = {
    children:React.ReactNode
}

const Oscar = (props: OscarProps) => {
    console.log(props)
  return (
      <div>
          <h1>Showing Children Props</h1>
      <p>{props.children}</p>
    </div>
  );
}

export default Oscar