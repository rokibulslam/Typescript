import React from 'react';
import './App.css'


// accept any attribute & Css Property
function Button({ children,styles,...rest }: { children: React.ReactNode } & React.ButtonHTMLAttributes<HTMLButtonElement> & {styles:React.CSSProperties}) {
  return <button style={styles} {...rest}>{children}</button>
}

// Generic Components
interface BoxProps{
  children:string,
}
function Box({ children, ...styles }: BoxProps &
  React.CSSProperties) {
  return <div style={styles}>
    {children}
  </div>
}

// Childrent props & Props
interface AChildComponentProps{
  title: string,
  body: string,
  children:React.ReactNode
}
function AChildComponent({title, body, children}:AChildComponentProps) {
  return (
    <div>
      <Box color="red" display="flex">This is Box (Generic Props)</Box>
      <h1>{title}</h1>
      <h4>Children Props: {children}</h4>
      <p>{body}</p>

    </div>
  );
}

function App() {
  
  return (
    <div className="App">
      <Button
        onClick={(e) => console.log(e)}
        styles={{ backgroundColor: "blueviolet", color: "whitesmoke" }}
      >
        This Is Button Children
      </Button>
      <AChildComponent title="This is Title" body="This is body">
        Rokibul Islam
      </AChildComponent>
    </div>
  );
}

export default App
