import { useState, useEffect } from 'react';

export const useHttp = (url, dependencies) => {
  const [fetchedData, setfetchedData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // fetch('https://swapi.co/api/people')
  useEffect(() => {
    setIsLoading(true);
    console.log('Sending http request');
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch.');
        }
        return response.json();
      })
      .then(data => {
        setIsLoading(false);
        setfetchedData(data);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }, dependencies);

  return [isLoading, fetchedData];
};
