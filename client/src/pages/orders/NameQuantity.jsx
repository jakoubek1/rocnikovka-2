import { useEffect, useState } from "react";
import { getItemById } from "@/models/Item";

export default function NameQuantity(props) {
  useEffect(() => {
    if (props.id) loadItem(props.id);
  }, []);

  const [item, setItem] = useState();

  const loadItem = async (itemId) => {
    const data = await getItemById(itemId);
    if (data.status === 200) {
      setItem(data.payload);
    }
  };

  return (
    <>
      {item && (
        <div>
          {item.name} x {props.count}
        </div>
      )}
    </>
  );
}
