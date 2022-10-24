import {useEffect, useState} from 'react'
import axios from 'axios';

const Activity = () => {
  const [activityData, setActivityData] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchActivity();
  }, [])

  const fetchActivity = async () => {
    const response = await axios(`https://www.boredapi.com/api/activity`);
    const data = response.data;
    setActivityData(data);
    setLoading(true);
    
  };
 
  return (
    <div>
      <h4 className='p-5 font-burtons text-center dark:text-white'>What you are seeing is a Random Activity Fetcher API. Showing a Random activity on each call.</h4>
      {loading && <div className='bg-teal-300 p-10 rounded-lg'>
        <div className='text-center font-burtons text-5xl'>{activityData.activity}</div>
        <div className='text-right font-bold'>Type - {activityData.type}</div>
      </div>}
    </div>
  )
}

export default Activity;