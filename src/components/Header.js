import React from 'react';
import Link from './Link'

const Header = () => {
    return (
        <div className="header">
            <div className="menuBar">
                <div className="logo">
                    <a href="/">
                        <img alt="site logo" src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/student-week1/logo-all-dark.svg"></img>
                    </a>
                </div>
                <ul className="menu">
                    <li><Link href="/">首頁</Link></li>
                    <li><Link href="/dessert"> 甜點</Link></li>
                    <li><Link href="/login"> 登入</Link></li>                        
                    <li className="icon">
                        <Link href="/cart">
                            <img alt="shopping cart logo" src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/student-week1/shopping_cart.png"></img>
                        </Link>
                    </li>
                </ul>
            </div>
    </div>
    );
}

export default Header;