import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateItem, getItemById } from "../../models/items";

export default function ItemsUpdateForm() {
  const { id } = useParams();
  const [item, setItem] = useState();
  const [isLoaded, setLoaded] = useState();
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState({});
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const load = async () => {
    const data = await getItemById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setItem(data.payload);
      setLoaded(true);
    }
  };

  const updateForm = async () => {
    const data = await updateItem(id, formData, password);
    if (data.status === 200) return navigate(`/items/${id}`);
    setInfo(data.message);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateForm();
  };

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) return <p>Item not found</p>;
  if (!isLoaded) return <p>Item is loading...</p>;

  return (
    <div className="flex items-center justify-center min-h-screen p-6">
      <div className="bg-white shadow-xl rounded-3xl p-6 w-full max-w-md flex flex-col items-center gap-4">
        <h1 className="text-2xl font-semibold text-gray-900">Item Update</h1>
        <p className="text-gray-500">ID: {id}</p>

        <form onSubmit={handleUpdate} className="flex flex-col gap-3 w-full">
          <input
            type="text"
            name="name"
            required
            placeholder="Enter name"
            onChange={handleChange}
            className="p-3 border rounded-lg w-full"
          />
          <input
            type="text"
            name="material"
            required
            placeholder="Enter material"
            onChange={handleChange}
            className="p-3 border rounded-lg w-full"
          />
          <input
            type="number"
            name="gram"
            required
            placeholder="Enter gram"
            onChange={handleChange}
            className="p-3 border rounded-lg w-full"
          />
          <input
            type="number"
            name="delivery"
            required
            placeholder="Enter delivery"
            onChange={handleChange}
            className="p-3 border rounded-lg w-full"
          />
          <input
            type="text"
            name="color"
            required
            placeholder="Enter color"
            onChange={handleChange}
            className="p-3 border rounded-lg w-full"
          />
          <input
            type="number"
            name="price"
            required
            placeholder="Enter price"
            onChange={handleChange}
            className="p-3 border rounded-lg w-full"
          />
          <input
            type="text"
            name="image"
            required
            placeholder="Enter image URL"
            onChange={handleChange}
            className="p-3 border rounded-lg w-full"
          />

          <input
            type="password"
            required
            placeholder="Admin password"
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 border rounded-lg w-full"
          />

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-500 w-full py-4 text-white text-lg rounded-lg"
          >
            Update Item
          </button>

          <p className="text-red-500">{info}</p>
        </form>

        <div className="grid grid-cols-2 gap-3 w-full mt-4">
          <Link to="/admin">
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-900 font-semibold w-full">
              Go back
            </button>
          </Link>
          <Link to="/">
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-900 font-semibold w-full">
              Main Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
