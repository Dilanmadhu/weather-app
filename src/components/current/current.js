
import './current.css'
import ItemSet from './weather_attributes/set/itemSet';
import sun from '../../assets/cloudy (1).png'
import set_img from '../hourly/add_image';

function Current({current:{wind_kph,pressure_mb, temp_c, humidity, uv, feelslike_c, condition:{text}}, location:{name, region, localtime, country}}){
  
    const attribute = { wind_speed: wind_kph, 
                        pressure: pressure_mb,
                        temp: temp_c,
                        humidity: humidity,
                        feel: feelslike_c,
                        uv: uv}
   
   // set the image according to condition
    const get_img= {
        condition:{
            text: text
        }
   }    
  const data = set_img([get_img]);
  
    return (
        <div className='grid-container-current'>
            <div className='item-set'>
                <ItemSet attribute={attribute}/>
            </div>
            
            <div className='weather-current'>
                <MainWeather img={data[0].img} localtime={localtime} condition={text} name={name} region={region} country={country}/>
            </div>
                
        </div>
    );
}






const MainWeather = ({condition, img, localtime, name, region, country}) =>{

    const timeParts = localtime.split(' '); // Split the string at the space
    const time = timeParts[1]; 
    return(

        <div className='main-weather-block'>
            <div className='main-weather-img-container'>
                <img src={img} alt='weather Icon' className='main-weather-img'/>
            </div>
            
            <div className='main-weather-value'>
                <h1 className='condition-text'>{condition}</h1>
                <h3 className='time-text'>{time}</h3><br/>
                <h2 className='city-text'>
                    {name}
                </h2>
                <p className='region-text'>{region}</p>
                <p className='region-text'>{country}</p>
            </div>
        
        </div>
    )
}

export default Current;