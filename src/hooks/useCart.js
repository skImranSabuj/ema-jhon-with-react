import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../utilities/fakedb';

const useCart = (products) => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const savedCart = getStoredCart();
        if (products.length) {
            const storedCart = [];
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);

                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart)
        }
    }, [products]);
    // console.log(cart)
    return [cart, setCart];
};

export default useCart;