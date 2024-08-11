import './daily.css'
import Day from './day.js';
import weather from '../../assets/weather_img/weather.png'
import Attribute from './attribute.js';

function Daily({tomorrow, dayAfter}){

    return (
        <div className='main-container-daily'>
            <div className='future'>
                <Day data={tomorrow} name="Tomorrow"/>
            </div>
            <div className='future'>
                <Day data={dayAfter} name="Day After"/>
            </div>    
            <div className='new-day'><Newday/></div>
                
        </div>
    
    );
}


function Newday(){
    return(
    <div className="day-container">
    <div className='title-container-day'>
        <h1 style={{fontSize:"120% ",fontFamily:"", fontWeight:'900 ', textAlign:"center", color:'#ffffff', fontStyle:"italic"}}>
            Incoming Days
            </h1>
    </div>
    <div className='img-container-day'>
        <img src ={weather} alt='weather icon' className='imge'/>
    </div>
    <div className='condition-container'>
        <div className='condition-day'><span className='condition-text-day'>......</span></div>
        <Attribute temp={`\u00B0C`} wind={`kmph`} humidity=''/>
    </div>
</div>
    )
}

export default Daily;