import React, { useState } from "react";
import PropTypes from "prop-types";
import arrowDown from "../../assets/images/arrow-down.png";
import arrowUp from "../../assets/images/arrow-up.png";
import "./collapse.scss";

const Collapse = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`collapse ${isOpen ? "open" : ""}`}>
            <div className="collapse-title" onClick={toggleCollapse}>
                <p>{title}</p>
                <img
                    src={isOpen ? arrowUp : arrowDown}
                    alt={isOpen ? "Flèche vers le haut" : "Flèche vers le bas"}
                />
            </div>
            <div className="collapse-content">{content}</div>
        </div>
    );
};

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
};

export default Collapse;
