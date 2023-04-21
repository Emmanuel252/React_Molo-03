import { useState } from 'react';

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const Increase = () => {
    setTimeout(() => {
      setValue(value + 1);
    }, 3000);
  };
  console.log(value);
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={Increase}>
        {' '}
        Augmenter
      </button>
    </>
  );
};

export default UseStateGotcha;
