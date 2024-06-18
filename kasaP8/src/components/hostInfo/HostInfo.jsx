import PropTypes from "prop-types";
// import React from "react";
import "./host-info.scss";

const HostInfo = ({ picture, name }) => {
    const [firstName, lastName] = name.split(" ");

    return (
        <div className="host-info">
            <div className="host-name">
                <p>
                    <span className="first-name">{firstName}</span>
                    <span className="last-name">{lastName}</span>
                </p>
            </div>
            <img src={picture} alt={name} className="host-picture" />
        </div>
    );
};

HostInfo.propTypes = {
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired
};

export default HostInfo;