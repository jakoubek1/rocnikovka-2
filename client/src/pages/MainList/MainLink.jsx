import { Link } from "react-router-dom";

export default function MainLink(props) {
  return (
    <Link
      to={`/product/${props._id}`}
      className="flex flex-col items-center text-white hover:opacity-90 transition duration-300"
    >
      <img
        src={props.image}
        alt={props.name}
        className="w-full max-w-[360px] h-[340px] object-cover mb-3 rounded-lg"
        style={{ filter: "drop-shadow(0 0 6px white)" }}
        draggable="false"
      />
      <h2 className="text-center text-lg font-semibold leading-tight mt-1">
        {props.name}
      </h2>
      <p className="text-center text-sm mt-0">{props.price} Kč</p>
    </Link>
  );
}
