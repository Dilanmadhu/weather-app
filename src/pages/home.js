import Current from "../components/current/current";
import Hourly from "../components/hourly/hourly";
import Daily from "../components/Daily/daily";
import MapView from "../components/map/map";
import b from '../assets/webBack.jpg'
import './home.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

import Navbar from "../components/navbar";
 
const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
function Home(){

    
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);
  const [bgImage, setBgImage] = useState(null);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [geolocation, setGeolocation] = useState({ latitude: 6.916983, longitude:  79.861058 });

  useEffect(()=>{
        if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
          setGeolocation({ latitude: position.coords.latitude, longitude: position.coords.longitude });
        })
      }
    },[])

  useEffect (()=>{
    axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${geolocation.latitude},${geolocation.longitude}&days=4&aqi=no&alerts=no`).then(
      response =>{
        setData(response.data)
        setLoading(false)
      }
    ).catch(err => {
      setError(err)
      setLoading(false)
    })
  },[geolocation])


  useEffect(() => {
    const img = new Image();
    img.src = b;
    img.onload = () => {
      setBgImage(img.src);
    };
  }, []);

  useEffect(() => {
    if (bgImage) {
      document.body.style.backgroundImage = `url(${bgImage})`;
     
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'center'; 
      setImgLoaded(true)
    }
    return () => {
      document.body.style.backgroundImage = null;
    };
  }, [bgImage]);


  if (loading || !imgLoaded) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }
  
   const hourly = data.forecast.forecastday[0].hour;
   const current = data.current;
   const location = data.location
   const tomorrow = data.forecast.forecastday[1]
   const dayAfter = data.forecast.forecastday[2]
   const time = data.location.localtime.split(" ")
   
  const handle = function(data){
    setGeolocation(data)
  }
return(
  <>
    <div  className='nav-background'><Navbar/></div>
    <div className="grid-container" >
   

        <div className="hourly-component">
            <Hourly hourly={hourly} time={time} location= {location}/>
        </div>
           
        <div className="current-component">
            <Current current={current} location={location}/>
        </div>

        
        <div className="map-component">
            <MapView geolocation={geolocation} handle={handle}/>
        </div>

        <div className="daily-component">
        <Daily tomorrow={tomorrow} dayAfter={dayAfter}/>
        </div>
      
    </div>
    </>
)
}

export default Home;