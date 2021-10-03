import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ReviewItem = (props) => {
    const { name, img, price, seller, stock, features, quantity, key } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>Price: {price}</p>
                <p><small>Quantity: {quantity}</small></p>
                <button
                    className="btn-regular"
                    onClick={() => props.handleRemove(key)}
                ><FontAwesomeIcon icon={faShoppingCart} /> remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;