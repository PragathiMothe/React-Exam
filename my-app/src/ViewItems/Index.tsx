import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Viewitems.scss'
const ViewIteam = () => {

  const [data, setData] = useState<any>();

  const id = useParams();

  const getData = async (item: any) => {
    try {
      const url = `http://localhost:5000/data/${item.id}`
      const result: any = await axios.get(url);
      // debugger
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
      {data &&
              <div className='viewcontainer'>
              <div>Name: {data.name}</div>
              <div>Roll Number: {data.rollnumber}</div>
              <div>English: {data.English}</div>
              <div>Telugu: {data.Telugu}</div>
              <div>Hindi: {data.Hindi}</div>
              <div>Science: {data.Science}</div>
              <div>Social: {data.Social}</div>
              <div>Activities: {data.activites}</div>
              <div>Total Marks: {data.totalmarks}</div>
              </div>
}      

    </div>
    </>
  )
}

export default ViewIteam