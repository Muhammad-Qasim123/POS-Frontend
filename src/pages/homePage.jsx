import React, { useEffect, useState } from 'react';
import SideBar from '../components/defaultLayout';
import axios from 'axios';
import { Row, Col } from 'antd';
import ItemList from '../components/itemList';

const HomePage = () => {
    const [itemsData, setItemsData] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("All")
    const categories = [
        {
            name: "All",
            imageUrl: "https://cdn-icons-png.flaticon.com/512/5562/5562062.png"
        },
        {
            name: "drinks",
            imageUrl: "https://cdn-icons-png.flaticon.com/512/1175/1175014.png"
        },
        {
            name: "rice",
            imageUrl: "https://cdn-icons-png.flaticon.com/512/184/184532.png"
        },
        {
            name: "noodles",
            imageUrl: "https://cdn-icons-png.flaticon.com/512/3041/3041130.png"
        },

    ]
    useEffect(() => {
        const getAllItems = async () => {
            try {
                const { data } = await axios.get('/api/items/get-item')
                setItemsData(data);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
        getAllItems()
    }, [])
    return (
        <div>
            <SideBar>
                <div className='d-flex'>
                    {
                        categories.map(category => (
                            <div key={category.name}
                                className={`d-flex align-items-center category ${selectedCategory === category.name && "category-active"}`}
                                onClick={() => setSelectedCategory(category.name)}>
                                <h4>{category.name}</h4>
                                <img src={category.imageUrl} alt={category.name} width="40" height="60" />
                            </div>
                        ))
                    }
                </div>
                <Row>
                    {
                        itemsData
                            // .filter((i)=>i.category=== selectedCategory)
                            .filter(item => selectedCategory === "All" || item.category === selectedCategory)
                            .map((item) => (
                                <Col xs={24} lg={6} md={12} sm={6}>
                                    <ItemList key={item.id} item={item} />
                                </Col>
                            ))
                    }
                </Row>
            </SideBar>

        </div>
    );
};

export default HomePage;