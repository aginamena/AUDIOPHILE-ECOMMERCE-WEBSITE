import React, { useState } from "react";
import "./EarPhones.css";
import AudioGear from "./AudioGear";
import Thumbnail from "./Thumbnail";
import DisplayInfo from "./DisplayInfo";

export default function EarPhones(props) {
    document.querySelector("#root").style = "background-color:white";
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    window.addEventListener("resize", () => { setWindowSize(window.innerWidth) })
    return (
        <>
            <h2 id="earphonesNav">EARPHONES</h2>
            <div id="earphonesBody" className="container">
                <DisplayInfo
                    imgSrc={windowSize >= 992 ? "./assets/product-yx1-earphones/desktop/image-category-page-preview.jpg"
                        : windowSize >= 768 ? "./assets/product-yx1-earphones/tablet/image-category-page-preview.jpg" :
                            "./assets/product-yx1-earphones/mobile/image-category-page-preview.jpg"}
                    isNewProduct="true"
                    shouldReverse="false"
                    heading="YX1 WIRELESS EARPHONES"
                    currentlyViewing={false}
                    slug="yx1-earphones"
                    sendSlug={slug => props.send(slug)}
                    description="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
                />
                <div id="earphonesList">
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
                <div id="earphonesAudio">
                    <AudioGear />
                </div>
            </div>
        </>
    )
}