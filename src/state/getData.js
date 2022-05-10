import { useState, useEffect } from 'react';

function useGetData(url) {

  const [data, setData] = useState([]);

  useEffect(() => {

    const fetchData = async (url) => {
      
      if(url !== "") {
        setData([])

        try {
          const response = await fetch(url);
          const fetchData = await response.json();

          setData(fetchData);

        }
        catch (error) {
          console.log(error.message);
        }
      }
    }

    fetchData(url);
  }, [url]);

  return data;
}

export default useGetData;