import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="subscribe">
                <img className="subscribeLog" alt="logo" src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/student-week1/logo-light.svg"></img>
                <p className="subscribeText">訂閱你我的甜蜜郵件</p>
                <div className="mailInput">
                    <div className="mailIcon">
                        <img alt="logo" src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/student-week1/mail-24px.png"></img>                                           
                    </div>
                    <input className="mailInput" type="text" placeholder="example@xxxx.ccom"></input>
                    <div className="arrowIcon">
                        <img alt="logo" src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/student-week1/arrow_forward-24px.png"></img>                
                    </div>
                </div>
            </div>
            <div className="footerInfo">
                <div className="infoAddress">
                    <div className="footerLogo">
                        <img alt="logo" src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/student-week1/logotype-sm-dark.svg"></img>
                    </div>
                    <div>
                        <p>07-1234-5678</p>    
                        <p>sweetaste@email.com</p>    
                        <p>800 高雄市新興區幸福路520號</p>    
                    </div>
                    <div className="footerIcon">
                        <img alt="icon" style={{paddingRight:'8px', cursor: 'pointer'}} src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/student-week1/ic-line%40.svg"></img>
                        <img alt="icon" style={{cursor: 'pointer'}} src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/student-week1/ic-facebook.svg"></img>
                    </div>
                </div>
                <div className="infoCopyrightArea">
                    <div className="verticalWord">
                        <p>今天是個 ————</p>
                        <p>吃甜點的好日子</p>
                    </div>
                    <div>© 2018 Sweetaste* All Rights Reserved</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;