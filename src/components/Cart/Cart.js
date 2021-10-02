import React from 'react';
import './Cart.css'


const Cart = (props) => {
    const {cart} = props;
    // console.log(props.children);

    // const totalReducer = (previous,product)=>previous + product.price;
    // const total = cart.reduce(totalReducer,0);

    let totalQuantiy = 0;
    let total = 0;
    for(const product of cart){
        if(!product.quantity){
            product.quantity=1;
        }
        total =  total + product.price * product.quantity;
        totalQuantiy =  totalQuantiy + product.quantity;
        }

    const shipping = 15;
    const tax = (total + shipping) * 0.1;
    const grantTotal = total + shipping + tax;


    return (
        <div>
            <h3>Order Summary</h3>
            {/* <h5>Items Ordered : {props.cart.length} </h5> */}
            <h5>Items Ordered : {totalQuantiy} </h5>
            <br />
            <p>Total : {total.toFixed(2)}</p>
            <p>Shipping : {shipping}</p>
            <p>Tax : {tax.toFixed(2)}</p>
            <p>Grant Total : {grantTotal.toFixed(2)}</p>
            {props.children}
        </div>
    );
};

export default Cart;