import { useEffect, useState } from "react";

const List = ({ getItems }) => {
  const [myItems, setMyItems] = useState([]);

  useEffect(() => {
    console.log("Buscando dados no DB...");
    setMyItems(getItems);
  }, [getItems]);
  return (
    <div>
      {myItems && myItems.map((item, index) => <p key={index}>{item}</p>)}
    </div>
  );
};

export default List;
