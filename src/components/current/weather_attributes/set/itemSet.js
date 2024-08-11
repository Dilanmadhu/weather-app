import './itemSet.css'
import pressure_img from "../../../../assets/pressure.png"
import humidity_img from "../../../../assets/humidity.png"
import feel_img from "../../../../assets/feel.png"
import thermometer_img from "../../../../assets/thermometer.png"
import uv_img from "../../../../assets/uv.png"
import wind_img from "../../../../assets/wind.png"
import Item from '../items/item';


/* this componet create the set of current weather attributes 
in the current weather page such as humudity, temperature, uv 
and so on. this is a grid view created with css flex box 
 */



export default function ItemSet({attribute: {pressure, wind_speed, temp, humidity, feel, uv}}){
   

    return (
        <div className='block'>
            <div className='grid-container-itemset'>

                <div className='item'>
                    <Item img={pressure_img} value={`${pressure} mb`} description="Pressure" />
                </div>

                <div className='item'>
                    <Item img={humidity_img} value={`${humidity}`} description="Humidity"/>
                </div>

                <div className='item'>
                    <Item img={feel_img} value={`${feel}\u00B0C`} description="Feel like"/>
                </div>

                <div className='item'>
                    <Item img= {thermometer_img} value={`${temp}\u00B0C`} description="Temperature"/>
                </div>
                
                <div className='item'>
                    <Item img= {uv_img} value={uv} description="UV" />
                </div>
               
                <div className='item'>
                    <Item img={wind_img}  value= {`${wind_speed}kmph`} description="Wind"/>
               </div>

            </div>
           
        </div>
    );
}