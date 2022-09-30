import React from 'react';
import "./Card.css";


function Card({ image, title, detail, price }) {
  return (
    <div className='card'>
        <img 
          className='card__img'
          src={image}
          alt={title}
        />
      
      <div className='card__details'>
        <strong className='card__title'>
          {title}
        </strong>
        <p className='card__detail'>{detail.substring(0,29) + "....."}</p>
        <p className='price'><strong>₹ { price}</strong> night</p>
      </div>
    </div>
  )
}

export default Card
