import { Link } from "react-router-dom";

export default function ItemLink(props) {
  return (
    <div className="item-link">
      <Link to={`/item/${props._id}`}>
        <p>{props.name}</p>
      </Link>
      <p>Množství na skladě: {props.stockQuantity ?? "Není dostupné"}</p>
    </div>
  );
}
