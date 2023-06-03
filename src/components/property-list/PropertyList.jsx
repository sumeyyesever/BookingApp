import { property } from "../../data"
import "./propertyList.scss";

export default function PropertyList() {
  return (
    <div className="property-container">
    <h1>Browse by property type</h1>
      <div className="property-wrapper">
      {property.map((p)=>(
        <div className="property">
            <img src={p.img} />
            <h2>{p.title}</h2>
            <span>{p.desc}</span>
        </div>)
      )}
      </div>
    </div>
  )
}
