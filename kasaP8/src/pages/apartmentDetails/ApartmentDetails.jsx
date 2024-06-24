import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ApartmentInfoLeft from "../../components/ApartmentInfoLeft/ApartmentInfoLeft";
import ApartmentInfoRight from "../../components/ApartmentInfoRight/ApartmentInfoRight";
import ApartmentDescription from "../../components/ApartmentDescription/ApartmentDescription";
import Slider from "../../components/Slider/Slider";
import "./apartment-details.scss";

const ApartmentDetails = () => {
    const { id } = useParams();
    const [apartment, setApartment] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("/RentalHouses.json")
            .then((response) => response.json())
            .then((data) => {
                // console.log("Data fetched:", data); 
                const apartment = data.find((apartment) => apartment.id === id);
                if (!apartment) {
                    navigate("/error");
                    return;
                }
                // console.log("Apartment found:", apartment); 
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
                <ApartmentInfoLeft
                    title={apartment.title}
                    location={apartment.location}
                    tags={apartment.tags}
                />
                <ApartmentInfoRight
                    host={apartment.host}
                    rating={apartment.rating}
                />
            </div>
            <ApartmentDescription
                description={apartment.description}
                equipments={apartment.equipments}
            />
        </div>
    );
};

export default ApartmentDetails;
