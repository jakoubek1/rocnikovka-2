import { Link } from "react-router-dom";

export default function ItemLink(props) {
  return (
    <Link to={`/item/${props._id}`}>
      <p>{props.name}</p>
    </Link>
  );
}
