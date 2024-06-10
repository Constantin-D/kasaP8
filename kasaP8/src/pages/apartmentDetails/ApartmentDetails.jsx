import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import Collapse from "../../components/collapse/Collapse";
import HostInfo from "../../components/hostInfo/HostInfo";
import RatingStar from "../../components/ratingStar/RatingStar";
import Slider from "../../components/slider/Slider";
import TagList from "../../components/tagList/TagList";
import "./apartment-container.scss";
import "./apartment-details.scss";

const ApartmentDetails = () => {
    const { id } = useParams();
    const [apartment, setApartment] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("/RentalHouses.json")
            .then((response) => response.json())
            .then((data) => {
                console.log("Data fetched:", data); // Debug
                const apartment = data.find((apartment) => apartment.id === id);
                if (!apartment) {
                    navigate("/*");
                    return;
                }
                console.log("Apartment found:", apartment); // Debug
                setApartment(apartment);
            })
            .catch((error) => {
                console.error(
                    "Erreur lors de la récupération des données :",
                    error
                );
            });
    }, [id]);

    if (!apartment) {
        return <div>Loading...</div>;
    }

    return (
        <div className="apartment-details">
            <Slider pictures={apartment.pictures} />
            <div className="apartment-info">
                <div className="apartment-info-left">
                    <h1>{apartment.title}</h1>
                    <p>{apartment.location}</p>
                    <TagList tags={apartment.tags} />
                </div>
                <div className="apartment-info-right">
                    <HostInfo
                        picture={apartment.host.picture}
                        name={apartment.host.name}
                    />
                    <RatingStar rating={parseInt(apartment.rating)} />
                </div>
            </div>
            <div className="apartment-collapse">
                <Collapse
                    title="Description"
                    content={<p>{apartment.description}</p>}
                />
                <Collapse
                    title="Équipements"
                    content={
                        <ul className="equipment-list">
                            {apartment.equipments.map((equipment, index) => (
                                <li key={index}>{equipment}</li>
                            ))}
                        </ul>
                    }
                />
            </div>
        </div>
    );
};

export default ApartmentDetails;
