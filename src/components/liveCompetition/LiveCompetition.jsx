import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TodayIcon from "@mui/icons-material/Today";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import TimerIcon from "@mui/icons-material/Timer";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase.config";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../store/features/productData/ProductData";
import { motion } from "framer-motion";
import SkeletonLoader from "../skeletonLoader/SkeletonLoader";
import './LiveCompetition.css'

const LiveCompetition = () => {
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.ProductData.data);
  const [timers, setTimers] = useState([]);
  console.log(timers);


  // **Firestore se Data Fetch karna**
  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "post"));
      const newData = querySnapshot.docs.map((doc) => doc.data());
      dispatch(setData(newData));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const calculateTimeLeft = (FeatureTime) => {
    const currentTime = Date.now();
    const timeDiff = FeatureTime - currentTime;
  
    if (timeDiff <= 0) {
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }
  
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
  
    return {
      days: String(days).padStart(2, "0"),
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    };
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTimers(Data.map((item) => calculateTimeLeft(item.FeatureTime)));
    }, 1000);

    return () => clearInterval(interval);
  }, [Data]);

  return (
    <div>
      <h1 className="liveCompetition-Main-Heading">Live Competitions</h1>
      <div className="main-home-product-div">
      <div className="secondDivByHomePAGE">
          {Data.length === 0 ? (
            <SkeletonLoader lines={4} width={500} height={200} />
          ) : (
            Data.map((item, index) => (
              <motion.div
              key={index}
              className="livecompetition-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="w-full h-full">
                <CardActionArea>
                  <div className="livecompetition-card-image-container">
                    <CardMedia
                      component="img"
                      className="livecompetition-card-image"
                      image={item.Image}
                      alt="Competition Image"
                    />
                  </div>
                  <CardContent className="livecompetition-card-content">
                    <Typography variant="h5" className="livecompetition-card-title">
                      {item?.Title?.slice(0,15) + '....'}
                    </Typography>
                    <Typography variant="body2" className="livecompetition-card-description">
                      {item.Description?.slice(0, 30) + "...."}
                    </Typography>
            
                    {/* Timer Section */}
                    <div className="livecompetition-timer-container">
                      <div className="livecompetition-timer-box">
                        <AccessTimeIcon />
                        <p>{timers[index]?.days || "00"}</p>
                        <p>Days</p>
                      </div>
            
                      <div className="livecompetition-timer-box">
                        <TodayIcon />
                        <p>{timers[index]?.hours || "00"}</p>
                        <p>Hours</p>
                      </div>
            
                      <div className="livecompetition-timer-box">
                        <HourglassEmptyIcon />
                        <p>{timers[index]?.minutes || "00"}</p>
                        <p>Min</p>
                      </div>
            
                      <div className="livecompetition-timer-box">
                        <TimerIcon />
                        <p>{timers[index]?.seconds || "00"}</p>
                        <p>Sec</p>
                      </div>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </motion.div>
            
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default LiveCompetition;
