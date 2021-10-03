import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    // const [products, setProducts] = useState([]);
    const [products, setProducts] = useProducts([]);
    // const [cart, setCart] = useState([]);
    const [cart, setCart] = useCart(products);
    const history = useHistory();

    const handleAddToCart = (product) => {
        const exists = cart.find(pd => pd.key === product.key);
        console.log(exists);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd.key !== product.key);
            product['quantity'] += 1;
            newCart = [...rest, product];
        }
        else {
            product['quantity'] = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        // console.log('new cart:', cart)
        addToDb(product.key);
    }
    const handlecheckOut = () => {
        history.push('/orders')
    }


    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.key}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    >
                    </Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlecheckOut} className="btn-regular">Check out</button>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;