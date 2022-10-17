import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import'./ReviewItem.css';

const ReviewItem = ({product,handleReviewItem}) => {
    const{id,name,price,shipping,quantity,img}=product;
    return (
        <div className='review-item'>
          <div>
          <img src={img} alt="" />
          </div>
          <div className="review-details-container">
            <div className="review-details">
                <p>{name}</p>
                <p>Price: ${price}</p>
                <p>Shipping: ${shipping}</p>
                <p>Quantiy: ${quantity}</p>
            </div>
            <div className="delete-container">
                <button className='btn-delete'>
                    <FontAwesomeIcon 
                    
                    onClick={()=>handleReviewItem(id)} 
                    className='delete-icon' 
                    icon={faTrashAlt}>

                    </FontAwesomeIcon>
                </button>
            </div>
          </div>
        </div>
    );
};

export default ReviewItem;