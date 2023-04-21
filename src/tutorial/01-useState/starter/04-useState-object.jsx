import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    hobby: 'Read book',
  });

  const displayPerson = () => {
    // setPerson({ name: 'john', age: 28, hobby: 'Scream computer' });
    setPerson({ ...person, name: 'sasha' });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>Enjoys: {person.hobby}</h3>
      <button className="btn" onClick={displayPerson}>
        Show John
      </button>
    </>
  );
};

export default UseStateObject;
