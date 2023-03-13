import React, { useReducer, useRef, useState } from 'react'
import './App.css'
//useRef
// useState
// useReducer
interface AddItemProps{
    handleClick: (text:Todo["text"])=>void
}
function AddItem({ handleClick }:AddItemProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="add-todo">
      <input ref={inputRef} placeholder="What do you do to do?" />
      <button
        onClick={() => {
          if (inputRef.current && inputRef.current.value) {
            handleClick(inputRef.current.value);
            inputRef.current.value=""
          }
        }}
      >Add Todo</button>
    </div>
  );
}

interface Todo{
    text: string,
    id:number
}
const initialstate={count:0}
enum ACTION_TYPE{
  increment = 'increment',
  decrement='decrement'
}
function reducer(state:typeof initialstate, action:{type:ACTION_TYPE}) {
  switch (action.type) {
    case ACTION_TYPE.increment:
      return { count: state.count + 1 }
    case ACTION_TYPE.decrement:
      if (state.count === 0) {
        return state;
      }
      return { count: state.count - 1 }
    default:
      throw new Error("what have you done");
  }
}
const App = () => {
  const [item, setItem] = useState<Todo[]>([])
  const [state, dispatch]=useReducer(reducer,initialstate)
  function handleClick(text: Todo["text"]) {
    return setItem([...item, {text, id:setItem.length + 1}])
  }
    function remove(id:Todo['id']) {
        return setItem([...item.filter(item=>item.id !==id)])
    }
  return (
    <div className="App">
      <h1>You have {item.length} todos</h1>
      <ul>
        {item.map((item, index) => (
          <li key={index}>
            <span>{item.text}</span>
            <button onClick={() => remove(item.id)}>X</button>
          </li>
        ))}
      </ul>
      <AddItem handleClick={handleClick} />
      Count {state.count}
      <button onClick={() => dispatch({ type: ACTION_TYPE.decrement })}>
        -
      </button>
      <button onClick={() => dispatch({ type: ACTION_TYPE.increment })}>
        +
      </button>
    </div>
  );
}

export default App