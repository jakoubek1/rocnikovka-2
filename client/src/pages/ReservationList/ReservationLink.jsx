import { Link } from "react-router-dom";

export default function ReservationLink(props) {
  return (
     <>
        <Link to={`/reservation/${props._id}`}>
            <p>{props.name}</p>
        </Link>
    </>
  );
}
