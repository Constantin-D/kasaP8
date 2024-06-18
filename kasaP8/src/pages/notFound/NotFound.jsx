// import React from "react";
import { Link } from 'react-router-dom';
import "./not-found.scss";

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404</h1>
            <p>
                <span>Oups! La page que </span>
                <span>vous demandez n'existe pas.</span>
            </p>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
    );
};

export default NotFound;