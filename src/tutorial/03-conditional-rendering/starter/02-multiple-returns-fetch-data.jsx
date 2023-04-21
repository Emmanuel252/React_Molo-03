import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [data, setData] = useState(null);
  const [IsLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        setData(users);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (IsLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>There are a error...</h2>;
  }

  return (
    <div>
      <img
        style={{ width: '150px', borderRadius: '25px' }}
        src={data.avatar_url}
        alt={data.name}
      />
      <h2>{data.name}</h2>
      <h4>{data.bio}</h4>
    </div>
  );
};
export default MultipleReturnsFetchData;
