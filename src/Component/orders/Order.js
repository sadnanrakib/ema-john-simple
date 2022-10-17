import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../Review/ReviewItem';

const Order = () => {
    const {products,initialCart}= useLoaderData();
    const [cart,setCart] = useState(initialCart);
    const handleReviewItem= (id)=>{
        const remaining = cart.filter(product=>product.id!==id);
        setCart(remaining);
        removeFromDb(id);
    }
    const clearCart =()=>{
        setCart([]);
        deleteShoppingCart();
       }
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product=><ReviewItem
                    key={product.id}
                    product={product}
                    handleReviewItem={handleReviewItem}
                    ></ReviewItem>)
                }
                {
                    cart.length ===0 && <h2>No Item Found For Review ..Please <Link to="/">Shop Now</Link></h2>
                }
            </div>
          <div className="cart-container">
               <Cart clearCart={clearCart} cart={cart}></Cart>
            </div> 
            {/* <h1>This is a Order:{products.length}</h1>
            <p>This: {initialCart.length}</p> */}
        </div>
    );
};

export default Order;