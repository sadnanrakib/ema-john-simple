import React, { Children } from 'react';
import'./Cart.css';

const Cart = ({cart,clearCart,children}) => {
    console.log(cart);
     let total=0;
     let shipping=0;
    for(const product of cart){
         total=total + product.price;
         shipping = shipping + product.shipping;
     }
     const tax = parseInt(total * 0.1);
     const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
           <h3>Order Summary</h3>
           <p>Selected Item:{cart.length}</p> 
           <p>Total Price :${total}</p>
           <p>Total Shipping :${shipping}</p>
           <p>Tax :${tax}</p>
           <h4>Grand Total:${grandTotal}</h4>
           <button onClick={clearCart}>Clear Cart</button> <br />
           {children}
        </div>
    );
};

export default Cart;