import React from 'react';
import "./Option.css";

function Option({img, detail}) {
  return (
    <div className='option'>
          <img 
              className='option__img'
              src={img}
              alt={detail}
          />
          <p className='option__detail'>{ detail }</p>
    </div>
  )
}

export default Option
