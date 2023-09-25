import React from 'react';
import { Button,Card } from 'antd';
import { useDispatch } from 'react-redux';
import { addItemToCArt } from '../redux/rootReducer';
const { Meta } = Card;
const ItemList = ({item}) => {
  const dispatch=useDispatch();
  const handleSubmit=()=>{
    dispatch(addItemToCArt(item))
  
  }
    return (
        <div>
             <Card

    style={{ width: 240, marginBottom:20 }}
    cover={<img alt={item.name } src={item.image} style={{height:250}} />}
  
  >
    <Meta title={item.name}  />
    <div className='item_button'>
      <Button onClick={handleSubmit}>Add to Cart</Button>

    </div>
  
  </Card>
        </div>
    );
};

export default ItemList;