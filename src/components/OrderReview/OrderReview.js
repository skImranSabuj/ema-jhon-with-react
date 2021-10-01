import React from 'react';
import useProducts from '../../hooks/useProducts';

const OrderReview = () => {
    const [products] = useProducts();
    return (
        <div>
            <h2>This is Order Review</h2>
            <h4>product: {products.length}</h4>
        </div>
    );
};

export default OrderReview;