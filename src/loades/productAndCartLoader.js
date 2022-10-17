// import { getStored } from "../utilities/fakedb";

// export const productAndCartLoader = async()=>{
//     const productsData = await fetch('products.json');
//     const products = productsData.json();
//     // get Cart
//     const saveCart = getStored();
//     const perviousCart = [];
//     for (const id in saveCart){
//         // console.log(id);
//         const addedProduct= products.find (product=>product.id===id);
//         // console.log(id,addedProduct);
//         if(addedProduct){
//             const quantity = saveCart[id];
//             addedProduct.quantity=quantity;
//             perviousCart.push(addedProduct);
//        }
//     }
//     return {products,perviousCart};
// }

import { getStored } from "../utilities/fakedb";

export const productAndCartLoader = async () => {
    // get Products
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    // get cart
    const saveCart = getStored();
    const initialCart = [];
    
    for (const id in saveCart) {
        const addedProduct = products.find(product => product.id === id);
        if (addedProduct) {
            const quantity = saveCart[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
        }
    }

    return { products: products, initialCart: initialCart };
}