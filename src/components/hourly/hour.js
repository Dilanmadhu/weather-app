import './hour.css'

export default function Hour({hour, img, temp, status}){

   const backgroundColor =  status==1 ? '#ffffff':'#808080';

    return(
        <div id='con' className='hour-item' style={{backgroundColor}}>
            <div className="hour-text">
                <h2>{hour}</h2>
            </div>
            <div className="hour-img-container">
                <img src={img} alt='test' className='hour-img'/>
            </div>
            <div className="hour-temp">
               <h3>{temp} </h3>
            </div>
        </div>
    )
}