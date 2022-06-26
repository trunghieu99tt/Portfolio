import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "swiper/css/swiper.css";
import Banner from "./components/Banner/Banner";
import ChangeCursor from "./components/ChangeCursor/ChangeCursor";
import Contact from "./components/Contact/Contact";
import Introduction from "./components/Introduction";
import MyProject from "./components/MyProject";
import ScrollBar from "./components/ScrollBar/ScrollBar";
import Timeline from "./components/Timeline";
import "./css/main.min.css";
import { useWindowSize } from "./hooks/useWindowsize";
import Footer from "./layout/Footer";
import Navigation from "./layout/Navigation";
import NavigationSmall from "./layout/NavigationSmall";

const App = () => {
    const size = useWindowSize();

    const width = size.width || 1920;

    const isDesktop = width >= 1200;

    return (
        <React.Fragment>
            <ScrollBar />
            <ChangeCursor />
            {(isDesktop && <Navigation />) || <NavigationSmall />}
            <Banner />
            <Introduction />
            <Timeline />
            <MyProject />
            <Contact />
            <Footer />
        </React.Fragment>
    );
};

export default App;
