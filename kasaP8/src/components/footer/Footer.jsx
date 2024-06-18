// import React from "react";
import LogoFooter from "../../assets/images/logo-footer.png";
import "./footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <img src={LogoFooter} alt="Logo de Kasa" />
            </div>
            <div>
                <p>
                    <span>© 2020 Kasa. All</span> 
                    <span>rights reserved</span>
                </p>
            </div>
        </div>
    );
};

export default Footer;
