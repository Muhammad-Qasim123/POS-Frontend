import React, { useEffect, useState } from "react";
import SideBar from "../components/defaultLayout";
import {
  DeleteOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "antd";
import { removeItemFromCart } from "../redux/rootReducer";





const CartPage = () => {
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems.cartItems, "mbllllll");
  const dispatch=useDispatch();
  const [quantities, setQuantities] = useState({}); // Store quantities for each item

  useEffect(() => {
    localStorage.setItem("itemsQuantity", JSON.stringify(quantities));
  }, [quantities]);


  useEffect(() => {
    const itemsQuantity = JSON.parse(localStorage.getItem("itemsQuantity"));
    if (itemsQuantity) {
      setQuantities(itemsQuantity);
    }
  }, []);


  const handleIncrement = (itemId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 1) + 1,
    }));
  };

  const handleDecrement = (itemId) => {
    if (quantities[itemId] > 0) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [itemId]: prevQuantities[itemId] - 1,
      }));
    }
  };


const handleDelete=(itemId)=>{
  dispatch(removeItemFromCart(itemId))
  
  const updateQuantites={...quantities};
  delete updateQuantites[itemId];
  setQuantities(updateQuantites)
}


  const columns = [
    { title: "Name", dataIndex: "name" },
    {
      title: "Image",
      dataIndex: "image",
      render: (image, record) => (
        <img src={image} alt={record.name} height="60" width="60" />
      ),
    },
    { title: "Price", dataIndex: "price" },
    {
      title: "Quantity",
      dataIndex: "_id",
      render: (_id, record) => (
        <div>
          <PlusCircleOutlined
            className="mx-3"
            onClick={() => handleIncrement(_id)}
          />
          <b>{quantities[_id] || 1}</b>
          <MinusCircleOutlined
            className="mx-3"
            onClick={() => handleDecrement(_id)}
          />
        </div>
      ),
    },
    {
      title: "Actions",
      dataIndex: "_id",
      render: (id, record) => <DeleteOutlined onClick={()=>handleDelete(id)} />,
    },
  ];
  return (
    <SideBar>
      <Table columns={columns} dataSource={cartItems.cartItems} bordered />
    </SideBar>
  );
};

export default CartPage;
