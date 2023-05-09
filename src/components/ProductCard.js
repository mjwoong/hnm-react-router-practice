import React from "react";
import { useNavigate } from 'react-router';

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`)
  }
  return (
    <div onClick={showDetail} className='productCard'>
      <img src={item?.img} className='card-img'/>
      <div className='card-conscious'>{item?.choice === true ? "Conscious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>₩ {item?.price}</div>
      <div className='card-new'>{item?.new === true ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
