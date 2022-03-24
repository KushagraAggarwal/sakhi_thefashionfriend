import React from 'react';
import './menu-item.style.scss';

const MenuItem = ({title,image,size,color})=>{return (
  <div className={`${size} menu-item`}>
    <div
      className="background-Image"
      style={{
        backgroundImage: `url(${image})`,
      }}
    />
    <div className={`${color} content`}>
      <h1 className="title">{title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);
  }

export default MenuItem;