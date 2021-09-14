import React, { useEffect, useState } from "react";
import "./HomePage.css";
import Nagivation from "./Navigation";
import AudioGear from "./AudioGear";
import Footer from "./Footer";
import Thumbnail from "./Thumbnail";
import { Link } from "react-router-dom";

export default function HomePage(props) {
    document.querySelector("#root").style = "background-color:white";
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    window.addEventListener("resize", () => { setWindowSize(window.innerWidth) })
    return (
        <>
            <header id="homepageHeader" style={{
                backgroundImage: windowSize >= 1233 ?
                    "url(./assets/home/desktop/image-hero.jpg)"
                    : windowSize >= 768 ? "url(./assets/home/tablet/image-header.jpg)" :
                        "url(./assets/home/mobile/image-header.jpg)"
            }}>
                <div className="container">
                    <div id="homepageDiv">
                        <div id="homepageNewProduct">NEW PRODUCT</div>
                        <h1>XX99 Mark II Headphones</h1>
                        <div id="homepageText">
                            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
                        </div>
                        <Link to="/prdDetail"><button onClick={() => props.send("xx99-mark-two-headphones")}>SEE PRODUCT</button></Link>
                    </div>
                </div>
            </header>

            <div className="container" id="homepageBody">
                <div id="homepageBodyDiv">
                    <Thumbnail
                        imgSrc="./assets/shared/desktop/image-category-thumbnail-headphones.png"
                        heading="HEADPHONES"
                        value="/headphones"
                    />
                    <Thumbnail
                        imgSrc="./assets/shared/desktop/image-category-thumbnail-speakers.png"
                        heading="SPEAKERS"
                        value="/speakers"
                    />

                    <Thumbnail
                        imgSrc="./assets/shared/desktop/image-category-thumbnail-earphones.png"
                        heading="EARPHONES"
                        value="/earphones"
                    />
                </div>
                <div id="homepageBodyDiv2">
                    <img src={windowSize >= 1233 ? "./assets/home/desktop/image-speaker-zx9.png" :
                        windowSize >= 768 ? "./assets/home/tablet/image-speaker-zx9.png" :
                            "./assets/home/mobile/image-speaker-zx9.png"}
                    />
                    <div id="homepageZx9SpeakerCon">
                        <h1>ZX9 SPEAKER</h1>
                        <div>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</div>
                        <Link to="/prdDetail"><button onClick={() => props.send("zx9-speaker")}>SEE PRODUCT</button></Link>
                    </div>
                </div>
                <div id="homepageBodyDiv3">
                    <div>
                        <h4>ZX7 SPEAKER</h4>
                        <Link to="/prdDetail"><button onClick={() => props.send("zx7-speaker")}>SEE PRODUCT</button></Link>
                    </div>
                    <img src={windowSize >= 1233 ? "./assets/home/desktop/image-speaker-zx7.jpg" :
                        windowSize > 500 ? "./assets/home/tablet/image-speaker-zx7.jpg" :
                            "./assets/home/mobile/image-speaker-zx7.jpg"} />
                </div>
                <div id="homepageBodyDiv4">
                    <img src={windowSize >= 1233 ? "./assets/home/desktop/image-earphones-yx1.jpg" :
                        windowSize > 500 ? "./assets/home/tablet/image-earphones-yx1.jpg" :
                            "./assets/home/mobile/image-earphones-yx1.jpg"} />
                    <div>
                        <span>
                            <h4>YX1 EARPHONES</h4>
                            <Link to="/prdDetail"><button onClick={() => props.send("yx1-earphones")}>SEE PRODUCT</button></Link>
                        </span>
                    </div>
                </div>
                <AudioGear />
            </div>
        </>
    )
}