import {useState} from "react";
import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";
import Hero from "../SOL components/About";
import Info from "../SOL components/Info";
import Lore from "../SOL components/Future";
import Map from "../SOL components/Roadmap"
import Tabs from "../SOL components/Benefits";
import Carousel from "../SOL components/Carousel";
import Cards from "../SOL components/Team"
import { homeObjOne } from "../SOL components/Info/Data";
import { homeObjTwo } from "../SOL components/Future/Data";
import Footer from "../layouts/Footer";
import Video from "../SOL components/Video";

const Sol = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <>
        <div style={{backgroundColor:'black'}}>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>  
            <Hero/>
            <Info {...homeObjOne}/>
            <Tabs />
            <Carousel />
            <Map />
            <Video />
            <Cards />
            <Lore {...homeObjTwo}/>
            <Footer/>
        </div>
        </>
    );
} 

export default Sol;