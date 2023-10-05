import React, { useEffect, useState } from "react";
import { Button, Card } from "antd";
import { useDispatch } from "react-redux";

// import { addItemToCArt } from '../redux/rootReducer';
import { addItemToCart } from "../redux/rootReducer";
const { Meta } = Card;
const ItemList = ({ item }) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const handleSubmit = () => {
    dispatch(addItemToCart(item));
  };
  return (
    <div>
      {loading && (
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )}
      <Card
        style={{ width: 240, marginBottom: 20 }}
        cover={<img alt={item.name} src={item.image} style={{ height: 250 }} />}
      >
        <Meta title={item.name} />
        <div className="item_button">
          <Button onClick={handleSubmit}>Add to Cart</Button>
        </div>
      </Card>
    </div>
  );
};

export default ItemList;
