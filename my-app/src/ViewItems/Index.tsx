import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ViewIteam = () => {

  const [data, setData] = useState<any>();

  const id = useParams();

  const getData = async (item: any) => {
    try {
      const url = `http://localhost:5000/data/${item.id}`
      const result: any = await axios.get(url);
      debugger
      setData(result.data)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData(id);
  }, [id])

  return (
    <>
    <div>
      {/* {data && */}
        <h1>{data.name}</h1>
      

    </div>
    </>
  )
}

export default ViewIteam