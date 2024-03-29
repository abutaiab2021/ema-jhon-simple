import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';
import { clearTheCart, getStoredCart } from '../utilities/fakedb';
import './Shipping.css'

const Shipping = () => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const {user} = useAuth();
    const onSubmit = data =>{
        const savedCart = getStoredCart();
        data.order = savedCart;
        // console.log(data);

        fetch('http://localhost:5000/orders',{
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
           if(result.insertedId){
               alert('Order Process Successfully!!');
               clearTheCart();
               reset();
           };
        })
    }
     
    return (
        <div>
    <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue={user.displayName} {...register("name")} />
        <input defaultValue={user.email} placeholder="Your Email" {...register("email",{ required: true })} />
        {errors.email && <span className="error">This field is required</span>}
        <input placeholder="Your Address" defaultValue="" {...register("Address",{ required: true })} />
        <input placeholder="Your City" defaultValue="" {...register("city",)} />
        <input placeholder="Your Mobile" defaultValue="" {...register("mobile")} />
        <input type="submit" />
    </form>
        </div>
    );
};

export default Shipping;