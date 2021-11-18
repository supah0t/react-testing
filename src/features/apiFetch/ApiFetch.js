import React, { useEffect } from 'react';
import { useGetPokemonByNameQuery } from './apiFetchSlice';

export default function App() {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');

  useEffect( () => {
    console.log(data);
  }, [data]);

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
