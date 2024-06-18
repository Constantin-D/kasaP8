// import React from "react";
import HostInfo from "../hostInfo/HostInfo";
import RatingStar from "../ratingStar/RatingStar";
import "./apartment-info-right.scss";

const ApartmentInfoRight = ({ host, rating }) => (
    <div className="apartment-info-right">
        <HostInfo picture={host.picture} name={host.name} />
        <RatingStar rating={parseInt(rating)} />
    </div>
);

export default ApartmentInfoRight;
