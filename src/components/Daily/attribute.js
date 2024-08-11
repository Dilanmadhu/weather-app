
import thermometer from '../../assets/thermometer.png'
import wind from '../../assets/wind.png'
import humidity from '../../assets/humidity.png'
import './attribute.css'

export default function Attribute(props){

    return(

        <div style={{width:"100%", display:"flex", flexWrap:"wrap", justifyContent:"center", boxSizing:'border-box', padding:"5%" }}>
            <div className='att-container'>
                <div className='att-img-cont'>
                    <img src={thermometer} alt="Weather Icon" className="att-img"/>
                </div>
                <div>
                    <span className='value-text-day'>{props.temp}</span>
                </div>
            </div>
            <div className='att-container'>
                 <div className='att-img-cont' >
                    <img src={wind} alt="Weather Icon" className="att-img"/>
                </div>
                <div>
                    <span className='value-text-day'>{props.wind}</span>

                 </div>
            </div>
            <div className='att-container'>
                 <div className='att-img-cont'>
                    <img src={humidity} alt="Weather Icon" className="att-img"/>
                </div>
                <div>
                    <span className='value-text-day'>{props.humidity}</span>

                 </div>
            </div>
        </div>
    )

}