import React, {useState, useEffect} from 'react';
import ProductList from './ProductList';
import Products from './Products';
import { AllProducts } from './AllProducts';
import PageChage from './PageChage';



const Content = () => {
    const [currentList, setCurrentList] = useState('all');
    const [currentPage, setcurrentPage] = useState(1);

    const productAmount = () => {
        let productCount = [];
        const countAll = AllProducts.length;
        let countToday = 0;
        let countRecommend = 0;
        let countArrival = 0;
    
        AllProducts.map((item, index) => {
            if(item.recommend)
                countRecommend++;
    
            if(item.todaySpecial)
                countToday++;
                
            if(item.newArrival)
                countArrival++;
            
            return '';
        });
        
        productCount.push(0, countAll, countToday, countRecommend, countArrival);
        return productCount;
    }

    return (
        <div className="content">
            <div className="productAD">
                <img alt="product advertisement" src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/student-week1/banner.png"></img>
            </div>
            <div className="productListArea">
                <ProductList currentList={currentList} setCurrentList={setCurrentList} setcurrentPage={setcurrentPage} productAmount={productAmount()}></ProductList>
                <Products allProducts={AllProducts} currentList={currentList} currentPage={currentPage} productAmount={productAmount()}></Products>
            </div>
            <PageChage currentList={currentList} allProducts={AllProducts} productAmount={productAmount()} currentPage={currentPage} setcurrentPage={setcurrentPage}></PageChage>                     
        </div>

    );
}

export default Content;