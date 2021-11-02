import React,{useState,useEffect} from "react";
import Product from "./Product";

const Products = ({allProducts, currentList, currentPage}) => {

    let count = 0;
    useEffect(()=>{
        rerenderProduct();
    },[currentPage]);

    const rerenderProduct = () => {
        return allProducts.map((item, index) => {
            
            if(currentList === 'all'){
                count++;

                if(Math.ceil(count/6) !== currentPage ){
                    return null;
                }
                return <Product price={item.price} name={item.name} img={item.img}></Product>
            }    
    
            if(item.recommend && currentList === 'recommend'){
                count++;
                if(Math.ceil(count/6) !== currentPage ){
                    return null;
                }
                return <Product price={item.price} name={item.name} img={item.img}></Product>
            }    
            
            if(item.todaySpecial && currentList === 'todaySpecial'){
                count++;
                if(Math.ceil(count/6) !== currentPage ){
                    return null;
                }
                return <Product price={item.price} name={item.name} img={item.img}></Product>
            }    
    
            if(item.newArrival && currentList === 'newArrival'){
                count++;
                if(Math.ceil(count/6) !== currentPage ){
                    return null;
                }
                return <Product price={item.price} name={item.name} img={item.img}></Product>
            }
    
            return (null);
        });       
    }

  
    return(
        <div className="productsWrap">
            {rerenderProduct()}
        </div>
    );
}

export default Products;
