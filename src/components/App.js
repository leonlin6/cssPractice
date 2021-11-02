import React from "react";
import Header from "./Header";
import Content from './Content';
import Footer from './Footer'
import Route from './Routes'

const App = () => {
    return (
        <div className="wrap">
            <Header></Header>
            <Route path="/">
                <Content></Content>
            </Route>
            <Route path="/dessert">
                Dessert
            </Route>
            <Route path="/login">
                Login
            </Route>
            <Route path="/cart">
                Cart
            </Route>
            <Footer></Footer>
        </div>
    );

}

export default App;