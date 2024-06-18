// import React from "react";
import TagList from "../tagList/TagList";
import "./apartment-info-left.scss";

const ApartmentInfoLeft = ({ title, location, tags }) => (
    <div className="apartment-info-left">
        <h1>{title}</h1>
        <p>{location}</p>
        <TagList tags={tags} />
    </div>
);

export default ApartmentInfoLeft;
