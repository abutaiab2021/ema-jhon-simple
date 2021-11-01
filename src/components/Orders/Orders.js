import React, { useEffect, useState } from 'react';

const Orders = () => {
    const [orders,setOrders] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
    return (
        <div>
            <h1>Places Orders are : {orders.length} orders</h1>
            <ul>
                {
                    orders.map(order => <li
                    key = {order._id}
                    >{order.name} : {order.email}</li>)
                }
            </ul>
        </div>
    );
};

export default Orders;