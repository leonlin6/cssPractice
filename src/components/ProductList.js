import React, {useEffect} from "react";
import Link from './Link';


const listHref = ['', 'all', 'todaySpecial','recommend','newArrival'];
const list = ['甜點類別','所有甜點','本日精選','人氣推薦','新品上市'];

const ProductList = ({currentList, setCurrentList, productAmount, setcurrentPage}) => {
    
    const onListClick = (listIndex) => {     
        setCurrentList(listHref[listIndex]);
        setcurrentPage(1);
    }    

    const pList = list.map((item, index) => {      
        if(index === 0){            
            return (
                <li>{item}</li>
            );
        }

        if(index === 1){
            return (
                <li className={currentList === 'all' ? 'active' : '' }>
                    <a onClick={() => {onListClick(index)}}>{item}({productAmount[1]})</a>
                </li>
            );
        }

        if(index === 2){
            return (
                <li className={currentList === 'todaySpecial' ? 'active' : '' }>
                  <a onClick={() => {onListClick(index)}}>{item}({productAmount[2]})</a>
                </li>
            );
        }

        if(index === 3){
            return (
                <li className={currentList === 'recommend' ? 'active' : '' }>
                  <a onClick={() => {onListClick(index)}}>{item}({productAmount[3]})</a>
                </li>
            );
        }

        return (
            <li className={currentList === 'newArrival' ? 'active' : '' }>
              <a onClick={() => {onListClick(index)}}>{item}({productAmount[4]})</a>
            </li>
        );
    });

    return (
        <ul className="productMenu">
            {pList}
        </ul>
    );    
}

export default ProductList;
