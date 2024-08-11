
import "./item.css"

export default function Item(props){

    return(
        <div className="block">
          <div className="image-container-item">
            <img src={props.img} alt="Weather Icon" className="attribute-icons"/>
          </div>
          <div className="text-container">
            <h2 className="value">{props.value}</h2>
            <span className="description">{props.description}</span>
          </div>
        </div>
    )

}