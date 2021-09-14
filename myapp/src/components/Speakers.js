import React, { useState } from "react";
import "./Speakers.css";
import AudioGear from "./AudioGear";
import Thumbnail from "./Thumbnail";
import DisplayInfo from "./DisplayInfo";

export default function Speakers(props) {
    document.querySelector("#root").style = "background-color:white";
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    window.addEventListener("resize", () => { setWindowSize(window.innerWidth) })
    return (
        <>
            <h2 id="speakersNav">SPEAKERS</h2>
            <div id="speakersBody" className="container">
                <DisplayInfo
                    imgSrc={windowSize >= 992 ? "./assets/product-zx9-speaker/desktop/image-category-page-preview.jpg"
                        : windowSize >= 768 ? "./assets/product-zx9-speaker/tablet/image-category-page-preview.jpg" :
                            "./assets/product-zx9-speaker/mobile/image-category-page-preview.jpg"}
                    isNewProduct="true"
                    shouldReverse="false"
                    heading="ZX9 SPEAKER"
                    currentlyViewing={false}
                    slug="zx9-speaker"
                    sendSlug={slug => props.send(slug)}
                    description="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
                />
                <DisplayInfo
                    imgSrc={windowSize >= 992 ? "./assets/product-zx7-speaker/desktop/image-category-page-preview.jpg"
                        : windowSize >= 768 ? "./assets/product-zx7-speaker/tablet/image-category-page-preview.jpg" :
                            "./assets/product-zx7-speaker/mobile/image-category-page-preview.jpg"}
                    isNewProduct="false"
                    shouldReverse="true"
                    heading="ZX7 SPEAKER"
                    currentlyViewing={false}
                    slug="zx7-speaker"
                    sendSlug={slug => props.send(slug)}
                    description="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
                />
                <div id="speakersList">
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
                <div id="speakerAudio">
                    <AudioGear />
                </div>

            </div>
        </>
    )
}