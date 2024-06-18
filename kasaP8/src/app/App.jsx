// import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/footer/Footer.jsx";
import Header from "../components/header/Header.jsx";
import About from "../pages/about/About.jsx";
import ApartmentDetails from "../pages/apartmentDetails/ApartmentDetails.jsx";
import Home from "../pages/home/Home.jsx";
import NotFound from "../pages/notFound/NotFound.jsx";
import "./app.scss";

const App = () => {
    return (
        <BrowserRouter>
            <div id="app">
                <Header />
                <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route
                        path="/apartment/:id"
                        element={<ApartmentDetails />}
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;
