import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import{addToDb, deleteShoppingCart, getStored} from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import'./Shop.css';

const Shop = () => {
    // const [products,setProducts]=useState([]);
    const products= useLoaderData();
    const [cart,setCart]=useState([])
    // useEffect(()=>{
    //     fetch('products.json')
    //     .then(res=>res.json())
    //     .then(data=>setProducts(data))
    // },[]);
    const clearCart =()=>{
        setCart([]);
        deleteShoppingCart();
       }

    useEffect(()=>{
        const storedCart = getStored();
        // console.log(storedCart);
        const saveCart =[];
        for(const id in storedCart){
            // console.log(id);
            const addedProduct= products.find(product=>product.id===id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity=quantity;
                saveCart.push(addedProduct)
                // console.log(addedProduct);
            }
            
        }
        setCart(saveCart)
    },[products])

    const handleClickAddCart=(product)=>{
        
        // console.log(product);
        // cart.push(product);
       const newCart = [...cart,product];
       setCart(newCart); 
       addToDb(product.id);

       

    }  
   
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=><Product 
                        key={product.id}
                        product={product}
                        handleClickAddCart={handleClickAddCart}
                        ></Product>)
                }
            </div>

            <div className="cart-container">
                <Cart clearCart={clearCart} cart={cart}>
                    <Link to="/orders">
                        <button>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;