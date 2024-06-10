import React from "react";
import PropTypes from "prop-types";
import "./tag-list.scss";

const TagList = ({tags}) => {
    console.log("Tags:", tags); // Debug
    return (
        <div className="tag-list">
            {tags.map((tag, index) => (
                <span key={index} className="tag">
                    {tag}
                </span>
            ))}
        </div>
    );
};

TagList.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default TagList;