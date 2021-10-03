import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../reviewItem/ReviewItem';
import './OrderReview.css';
// import removeFromDb from '../../utilities/fakedb';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const array = ['beauti', 'sweety']
    console.log('yes bro: ', array.includes('bea'));
    const history = useHistory();

    const handleRemove = (key) => {
        console.log(key);
        const newCart = cart.filter(item => item.key !== key);
        setCart(newCart);
        removeFromDb(key)
    }
    const handlePlaceOrder = () => {
        setCart([]);
        clearTheCart();
        history.push('/placeorder');

    }
    return (
        <div>
            <div className="shop-container">
                <div className="product-container">
                    {/* <h2>This is Order Review</h2>
                    <h4>product: {products.length}</h4>
                    <h4>Cart: {cart.length}</h4> */}
                    {
                        cart.map(product => <ReviewItem
                            key={product.key}
                            product={product}
                            handleRemove={handleRemove}
                        // handleAddToCart={handleAddToCart}
                        >
                        </ReviewItem>)
                    }
                </div>
                <div className="cart-container">
                    <Cart
                        cart={cart}
                    >
                        <button onClick={handlePlaceOrder} className="btn-regular">Place Order</button>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;