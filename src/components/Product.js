import React from "react";
import FavoriteIcon from './FavoriteIcon';

const Product = ({price, name, img}) => {
    return (
        <div className="product">
            <div className="item">
                <img alt="product images" src={img}></img>
                <div className="flag">本日精選</div>
                <FavoriteIcon></FavoriteIcon>
            </div>
            <div className="priceArea">
                <div>{name}</div>
                <div>NT$ {price}</div>
            </div>
            <div className="addToCart">加入購物車</div>
        </div>  
    );
}

export default Product;