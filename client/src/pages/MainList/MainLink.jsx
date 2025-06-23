import { Link } from "react-router-dom";
 
export default function MainLink(props) {
  return (
    <>
      <Link
        to={`/product/${props._id}`}
        className="flex flex-col items-center text-white hover:opacity-80 transition duration-300"
      >
        <img
          src={props.image}
          alt={props.name}
          className="w-[380px] h-[400px] object-cover mb-2 rounded-lg"
          style={{ filter: "drop-shadow(0 0 10px white)" }}
          draggable="false"
        />
        <h2 className="text-center text-lg font-semibold mb-1">{props.name}</h2>
        <p className="text-center text-sm mb-0">{props.price} Kč</p>
      </Link>
    </>
  );
}