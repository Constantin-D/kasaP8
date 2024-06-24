// import React from "react";
import HostInfo from "../HostInfo/HostInfo";
import RatingStar from "../RatingStar/RatingStar";
import "./apartment-info-right.scss";

const ApartmentInfoRight = ({ host, rating }) => (
    <div className="apartment-info-right">
        <HostInfo picture={host.picture} name={host.name} />
        <RatingStar rating={parseInt(rating)} />
    </div>
);

export default ApartmentInfoRight;
