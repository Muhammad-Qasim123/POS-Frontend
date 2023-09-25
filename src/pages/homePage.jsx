import React, { useEffect, useState } from 'react';
import SideBar from '../components/defaultLayout';
import axios from 'axios';
import { Row, Col } from 'antd';
import ItemList from '../components/itemList';

const HomePage = () => {
    const [itemsData, setItemsData] = useState([])
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
                <Row>
                    {
                        itemsData.map(item => (
                            <Col xs={24} lg={6} md={12} sm={6}>
                                <ItemList item={item} />
                            </Col>
                        ))
                    }
                </Row>
            </SideBar>

        </div>
    );
};

export default HomePage;