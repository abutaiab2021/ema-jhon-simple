import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import '../Shop/Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    // Products to be render on the UI
    const [displayproducts,setDisplayProducts] = useState([]);

    useEffect(()=>{
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
            setDisplayProducts(data)
            
        });
    },[])

    useEffect(()=>{
        // console.log('Local Storage Called');
        if(products.length){
            const savedCart = getStoredCart();
            const storedCart = [];
            for(const key in savedCart){
                // console.log(key,savedCart[key]);
            const addedProduct = products.find(product => product.key === key);
            if(addedProduct){
                const quantity = savedCart[key];
                addedProduct.quantity=quantity;
                // console.log(addedProduct);
                storedCart.push(addedProduct);
            }  
        }
        setCart(storedCart);
     }
    },[products])

    //valo kore boste hobe
    const handleAddToCart = (product)=>{
        const exits = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if(exits){
            const rest = cart.filter(pd => pd.key !== product.key);
            exits.quantity=exits.quantity+1;
            newCart = [...rest,product];
        }
        else{
            product.quantity = 1;
            newCart = [...cart,product];
        }
        
        // console.log(newCart);
        setCart(newCart);
        // console.log(product);
        addToDb(product.key);
    }

    const handleSearch = event =>{
        const searchText = event.target.value;
        const matchedProducts = products.filter(product=>product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProducts);
        console.log(matchedProducts.length);
    }

    return (
        <>
        <div>
            <div className="search-container">
                <input 
                type="text"
                onChange={handleSearch}  
                placeholder="Search Product"
                />
            </div>
            <div className="shop-container">
            <div className="product-container">
                {
                    
                        displayproducts.map(product => <Product
                        key={product.key} 
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div> 
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/OrderReview">
                        <button className="btn-regular">Review Your Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
        </div>
    </>
    );
};

export default Shop;