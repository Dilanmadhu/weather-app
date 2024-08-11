
import Hour from './hour';
import './hourly.css'

import set_img from './add_image';


function Hourly({hourly , time, location}){
 let h_status;
 const hour = time[1].split(":")[0]

  const data = set_img(hourly)
   
   return (
    <div className='hourly-background'>
      <h1 style={{color:"#ffffff", fontFamily:' serif', fontStyle:"italic"}}>Today In {location.name}</h1>
        <div className='hourly-display'>
      {data.map((data, index) => {

          const timeString = data.time;
          const timeParts = timeString.split(' '); // Split the string at the space
          const time = timeParts[1]; 

          if(parseInt(timeParts[1].split(":")[0])==parseInt(hour)){
             h_status = 1
          }else{h_status = 0}

          return (<Hour id = {index} img={data.img} temp={data.condition.text} hour={time} status = {h_status} />)
      })}
      </div>
    </div>
  );
}



export default Hourly;