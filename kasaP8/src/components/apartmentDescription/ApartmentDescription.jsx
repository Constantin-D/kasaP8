// import React from "react";
import Collapse from "../Collapse/Collapse";
import "./apartment-description.scss";

const ApartmentDescription = ({ description, equipments }) => (
    <div className="apartment-description">
        <Collapse title="Description" content={<p>{description}</p>} />
        <Collapse
            title="Équipements"
            content={
                <ul className="equipment-list">
                    {equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                    ))}
                </ul>
            }
        />
    </div>
);

export default ApartmentDescription;
