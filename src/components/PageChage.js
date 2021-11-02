import React from 'react';

const PageChage = ({currentList, allProducts, productAmount, currentPage, setcurrentPage}) => {
    
    const pageArray = [];   

    const renderPage = () =>{
        for(let i = 1; i <= pageLimit(); i++){
            pageArray.push(<li className={i === currentPage ? 'active' : ''} key={`id${i}`} onClick={() => {setcurrentPage(i)}}><a>{i}</a></li>);
        }

        const ren = pageArray.map((item) => {
            return item;
        });

        return ren;
    }

    const pageLimit = () => {
        switch(currentList){
            case 'all':
                return Math.round(productAmount[1] / 6);
            case 'todaySpecial':
                return Math.round(productAmount[2] / 6);
            case 'recommend':
                return Math.round(productAmount[3] / 6);
            case 'newArrival':
                return Math.round(productAmount[4] / 6);
            default:
                return;
        }
    }    

    const prevPage = () => {
        if(currentPage-1 < 1)
            return;

        setcurrentPage(currentPage-1);
    }  

    const nextPage = () => {
        if(currentPage+1 > pageLimit())
            return ;

        setcurrentPage(currentPage+1);
    }



    return (
            <ul className="pageChange">
                <li className="noHover"><a onClick={() => {prevPage()}}><img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/student-week1/arrow_left.png"></img></a></li>
                {renderPage()}
                <li className="noHover"><a onClick={() => {nextPage()}}><img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/student-week1/arrow_right.png"></img></a></li>
            </ul>   
    );
}

export default PageChage;

