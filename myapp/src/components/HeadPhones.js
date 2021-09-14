import React, { useState } from "react";
import "./HeadPhones.css";
import AudioGear from "./AudioGear";
import DisplayInfo from "./DisplayInfo";
import Thumbnail from "./Thumbnail";

export default function HeadPhones(props) {
    document.querySelector("#root").style = "background-color:white";
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    window.addEventListener("resize", () => { setWindowSize(window.innerWidth) })
    return (
        <>
            <h2 id="headphonesNav">HEADPHONES</h2>
            <div className="container" id="headphonesBody">
                <DisplayInfo
                    imgSrc={windowSize >= 992 ? "./assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
                        : windowSize >= 768 ? "./assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg" :
                            "./assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg"}
                    isNewProduct="true"
                    shouldReverse="false"
                    heading="XX99 Mark II Headphones"
                    description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
                    currentlyViewing={false}
                    slug="xx99-mark-two-headphones"
                    sendSlug={slug => props.send(slug)}
                />
                <DisplayInfo
                    imgSrc={windowSize >= 992 ? "./assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg" :
                        windowSize >= 768 ? "./assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg" :
                            "./assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg"}
                    isNewProduct="false"
                    shouldReverse="true"
                    heading="XX99 Mark I Headphones"
                    description="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
                    currentlyViewing={false}
                    slug="xx99-mark-one-headphones"
                    sendSlug={slug => props.send(slug)}
                />
                <DisplayInfo
                    imgSrc={windowSize >= 992 ? "./assets/product-xx59-headphones/desktop/image-category-page-preview.jpg"
                        : windowSize >= 768 ? "./assets/product-xx59-headphones/tablet/image-category-page-preview.jpg" :
                            "./assets/product-xx59-headphones/mobile/image-category-page-preview.jpg"}
                    isNewProduct="false"
                    shouldReverse="false"
                    heading="XX59 Headphones"
                    description="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
                    currentlyViewing={false}
                    slug="xx59-headphones"
                    sendSlug={slug => props.send(slug)}
                />
                <div id="headphonesList">
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
                <div id="headphoneAudio">
                    <AudioGear />
                </div>

            </div>
        </>

    )
}