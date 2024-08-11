
import storm from '../../assets/storm.png'
import sun from '../../assets/weather_img/sun.png'
import cloudy from '../../assets/weather_img/cloudy.png'
import partly_cloudy from '../../assets/weather_img/partly-cloudy.png'
import heavy_rain from '../../assets/weather_img/heavy-rain.png'
import moderate_rain from '../../assets/weather_img/moderate-rain.png'
import mist from '../../assets/weather_img/mist.png'
import thunder_rain from '../../assets/weather_img/thunder_rain.png'
import rain_shower from '../../assets/weather_img/rain_shower.png'
import light_rain from '../../assets/weather_img/light_rain.png'
import overcast from '../../assets/weather_img/overcast.png'
import weather from '../../assets/weather_img/weather.png'
import clear from '../../assets/weather_img/clear.png'
import thunder_outbreak from '../../assets/weather_img/thunder_outbreak.png'

function set_img(data){

    const data_ret = data.map(data => {

        switch(data.condition.text){

        case("Clear "):
            data.img = clear;
            break;
        case("Clear"):
            data.img = clear;
            break;
        case ("Sunny"):
            data.img = sun;
            break;
        case("Cloudy "):
            data.img= cloudy;
            break;
        case("Partly Cloudy "):
            data.img = partly_cloudy;
            break;
        case("Partly cloudy"):
            data.img = partly_cloudy;
            break;
        case("Overcast "):
            data.img = overcast;
            break;
        case("Mist"):
            data.img = mist;
            break;
        case("Patchy rain possible"):
            data.img = light_rain;
            break;
        case("Patchy rain nearby"):
            data.img = light_rain;
            break;
        case ("Patchy light rain"):
            data.img = light_rain;
            break;
        case("Light rain"):
            data.img = light_rain;
            break;
        case("Light rain shower"):
            data.img = rain_shower;
            break;
        case("Moderate rain at times"):
            data.img = moderate_rain;
            break;
        case("Moderate rain"):
            data.img = moderate_rain;
            break;
        case("Heavy rain at times"):
            data.img = heavy_rain;
            break;
        case("Heavy rain"):
            data.img = heavy_rain;
            break;
        case("Moderate or heavy rain shower"):
            data.img = heavy_rain;
            break;
        case ("Moderate or heavy rain with thunder"):
            data.img = thunder_rain
            break;
        case("Thundery outbreaks possible"):
            data.img = thunder_outbreak;
            break;
        case("Thundery outbreaks in nearby"):
            data.img = thunder_outbreak;
            break;
        default:
            data.img = weather
        }
        return(data)
    })

    return data_ret;
}

export default  set_img;