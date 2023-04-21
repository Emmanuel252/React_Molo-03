import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {
  const [IsLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (IsLoading) {
    return <h2>Loading...</h2>;
  }

  return <h2>Multiple Returns Basics</h2>;
};
export default MultipleReturnsBasics;
