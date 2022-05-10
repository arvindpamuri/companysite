import { useState, useEffect } from 'react';

function useGetData(tablename) {

  const [data, setData] = useState({});

  useEffect(() => {

    const fetchData = async (tablename) => {
      
      if(tablename !== "") {
        let url = "https://company11.azurewebsites.net/employees/";
        setData([])

        try {
          const response = await fetch(url);
          const fetchData = await response.json();

          console.log(fetchData)
          setData(fetchData);

        }
        catch (error) {
          console.log(error.message);
        }
      }
    }

    fetchData(tablename);
  }, [tablename]);

  return data;
}

export default useGetData;