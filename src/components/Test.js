import React, { useEffect } from 'react';

const Test = () => {

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = () => {
    fetch("/api")
      .then(res => res.text())
      .then(res => console.log(res));
  };

  return (
    <>
      <h2>Testing dynamic data testing</h2>
    </>
  );
}

export default Test;
