import { Link, useParams } from "react-router-dom";

export default function CreatedItem() {
  const { id } = useParams();

  return (
    <div className="flex items-center justify-center min-h-screen p-6">
      <div className="bg-white shadow-xl rounded-3xl p-6 w-full max-w-md flex flex-col items-center gap-4">
        <h1 className="text-2xl font-semibold text-gray-900">Created Item</h1>

        <p className="text-lg text-gray-700">
          <span className="font-medium">ID:</span>
          <span className="text-gray-600 font-light ml-2">{id}</span>
        </p>

        <div className="flex flex-col gap-2 w-full">
          <Link to={`/items/${id}`}>
            <button className="w-full text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-3 focus:outline-none">
              View Item
            </button>
          </Link>

          <Link to="/admin">
            <button className="w-full border border-gray-300 hover:bg-gray-100 text-gray-900 font-medium rounded-lg text-sm px-5 py-3">
              Go back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
