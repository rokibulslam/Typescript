import './App.css';
import Button from './component/Button';
import Greet from './component/Greet';
import Header from './component/Header';
import Input from './component/Input';
import Oscar from './component/Oscar';
import Person from './component/Person';
import { IPerson } from './utils/type';
 const person: IPerson = {
   first: "Rokibul",
   last: "Islam",
   age: 23,
 };
 const personList: IPerson[] = [
   {
     first: "Rokibul",
     last: "Islam",
     age: 23,
   },
   {
     first: "Rokibul",
     last: "Islam",
     age: 23,
   },
 ];

function App() {
 
  return (
    <div className="App">
      <Greet name="rokibul" messageCount={20} isLoggedIn={false} />
      <Person person={person} personList={personList} />
      <Oscar><Header>This Is Oscar Header</Header></Oscar>
      <Button onClick={(e, id) => { console.log('button clicked') }}></Button>
      <Input value='' handleOnChange={(event)=>{console.log(event)}}></Input>
    </div>
  );
}

export default App;
