import React, { useEffect } from 'react';
import { useGetPokemonByNameQuery, useDefaultQuery } from './apiFetchSlice';

export default function App() {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');

  useEffect( () => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    apiGet();
  }, []);

  const apiGet = () => {
    fetch("http://localhost:8000/api")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
  };

  const { data: newData } = useDefaultQuery();
  console.log(newData);

  const showComponent =       
    (
      <div>
        { isLoading
          ? <p>Loading..</p>
          : { data } 
        }
      </div>
    );

  return (
    <div>
      Rtk fetching
    </div>
  );
}
