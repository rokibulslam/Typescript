import { IPerson } from "../utils/type";

type PersonProp = {
    person: IPerson,
    personList:IPerson[]
}
const Person = (props:PersonProp) => {
  return (
    <div>
      <div>
        <p>Showing Another Props</p>
        <h1>{props.person.first}</h1>
      </div>
      <h1>Showing Map</h1>
      {props.personList.map((person, index) => (
        <div>
          <div>
            <span>{person.first}</span>
            <span>{person.last}</span>
            <span>{person.age}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Person