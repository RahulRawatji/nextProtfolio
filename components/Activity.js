import {useEffect, useState} from 'react'
import axios from 'axios';

const Activity = () => {
  const [activityData, setActivityData] = useState("");

  useEffect(() => {
    fetchActivity();
  }, [])

  const fetchActivity = async () => {
    const response = await axios(`https://www.boredapi.com/api/activity`);
    const data = response.data;
    setActivityData(data);
  };
 
  return (
    <div className='bg-teal-300 p-10 rounded-lg'>
      <div className='text-center font-burtons text-5xl'>{activityData.activity}</div>
      <div className='text-right font-bold'>Type - {activityData.type}</div>
    </div>
    
  )
}

export default Activity;