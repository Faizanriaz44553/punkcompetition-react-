import React from 'react'
import Carousel from '../../components/carousol/Carousel'
import HowWork from '../../components/how-to-work/HowWork'
import LiveCompetition from '../../components/liveCompetition/LiveCompetition'

// import { useSelector } from 'react-redux';

const Home = () => {
  // const user = useSelector((state) => state.user.user.email)
  // console.log(user);
  
  return (
    <div>
     <Carousel/>
     <div>
     <HowWork/>
     <LiveCompetition/>
     </div>
    </div>
  )
}

export default Home
