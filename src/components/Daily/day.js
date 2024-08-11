
import './day.css'
import sun from '../../assets/sun.png'
import Attribute from './attribute';
import rain from '../../assets/weather_img/light_rain.png'

function Day({data, name}){

    if(data.day.daily_will_it_rain){
        data.img = rain;
        data.condition1 = "Rain Possible"
    }else{
        data.img=sun
        data.condition1 ="Sunny"
    }

    return(
        <div className="day-container">
            <div className='title-container-day'>
                <h1 style={{fontSize:"120% ",fontFamily:"", fontWeight:'900 ', textAlign:"center", color:'#ffffff', fontStyle:'italic'}}>
                    {name}
                    </h1>
            </div>
            <div className='img-container-day'>
                <img src ={data.img} alt='weather icon' className='imge'/>
            </div>
            <div className='condition-container'>
                <div className='condition-day'><span className='condition-text-day'>{data.condition1}</span></div>
                <Attribute temp={`${data.day.avgtemp_c}\u00B0C`} wind={`${data.day.maxwind_kph} kph`} humidity={data.day.totalprecip_mm} />
            </div>
        </div>
    ) 


}

export default Day;