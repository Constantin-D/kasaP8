// import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer/Footer.jsx";
import Header from "../components/Header/Header.jsx";
import About from "../pages/About/About.jsx";
import ApartmentDetails from "../pages/ApartmentDetails/ApartmentDetails.jsx";
import Home from "../pages/Home/Home.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";
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
