import React, { useEffect, useState } from 'react';
import SideBar from '../components/defaultLayout';
import axios from 'axios';
import {
    DeleteOutlined,
    EditOutlined
} from "@ant-design/icons";
import { Button, Form, Input, Modal, Select, Table, message } from 'antd';

const ItemPage = () => {
    const [itemsData, setItemsData] = useState([])
    const [popupModal, setPopupModal] = useState(false)
    const [editItem, setEditItem] = useState(null)
    const getAllItems = async () => {
        try {
            const { data } = await axios.get('/api/items/get-item')
            setItemsData(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getAllItems()
    }, [])


    const handleDelete=async(record)=>{
        try {
            await axios.post("/api/items/delete-item",{itemId:record._id})
            message.success("Item Delete Successfully")
            getAllItems();
            setPopupModal(false);
        } catch (error) {
          console.log(error);
       message.error("Something went wrong");
        }
    }
    /////Table data]
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
            title: "Actions",
            dataIndex: "_id",
            render: (id, record) => <div className='itemList_actions'><EditOutlined
                onClick={() => {
                    setEditItem(record)
                    setPopupModal(true)
                }} /><DeleteOutlined
                onClick={()=>{
                    handleDelete(record)
                }}
                /></div>,
        },
    ];
    const handleSubmit = async (value) => {
        if (editItem == null) {
            try {
                const res = await axios.post("/api/items/add-item", value)
                console.log(res);
                message.success("Items add Successfully")
                getAllItems()
                setPopupModal(false)
            } catch (error) {
                console.log(error);
                message.error("Something went wrong")
            }
        } else {
            try {
                console.log(editItem,"pennnnnnnnn");
                const res = await axios.put("/api/items/edit-item", { ...value, itemId: editItem._id })
                console.log(res);
                message.success("Items update Successfully")
                getAllItems()
                setPopupModal(false)
            } catch (error) {
                console.log(error);
                message.error("Something went wrong")
            }
        }

    }
    return (
        <SideBar>
            <div className="d-flex  justify-content-between align-items-center">
                <h1>Items List</h1>
                <Button type="primary" onClick={() => setPopupModal(true)}>Add Item</Button>
            </div>
            <Table columns={columns} dataSource={itemsData} bordered />
            {
                popupModal && (
                    <Modal title={`${editItem !== null ? "Edit Item" : "Add New Item"}`} open={popupModal} onCancel={() => {
                        setEditItem(null)
                        setPopupModal(false)

                    }}
                        footer={false}>
                        <Form layout='vertical'
                            initialValues={editItem}
                            onFinish={handleSubmit}>
                            <Form.Item name="name" label="Name">
                                <Input />
                            </Form.Item>
                            <Form.Item name="price" label="Price">
                                <Input />
                            </Form.Item>
                            <Form.Item name="image" label="Image URL">
                                <Input />
                            </Form.Item>
                            <Form.Item name="category" label="Category">
                                <Select>
                                    <Select.Option value="drinks">Drinks</Select.Option>
                                    <Select.Option value="rice">Rice</Select.Option>
                                    <Select.Option value="noodles">Noodles</Select.Option>
                                </Select>
                            </Form.Item>

                            <div className="d-flex justify-content-end" >
                                <Button htmlType='submit' type='primary'>Save</Button>
                            </div>
                        </Form>
                    </Modal>
                )
            }
        </SideBar>
    );
};

export default ItemPage;