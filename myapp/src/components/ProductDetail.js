import React, { useEffect, useState } from "react";
import DisplayInfo from "./DisplayInfo";
import "./ProductDetail.css";
import OthersCmp from "./OthersCmp";
import Thumbnail from "./Thumbnail";
import AudioGear from "./AudioGear";
import Cart from "./Cart";

export default function ProductDetail(props) {
    window.onbeforeunload = function () {
        if (window.location.pathname == "/prdDetail") {
            window.setTimeout(function () {
                // going back to homepage when the user refreshes the page
                window.location = '/';
            }, 0);
            window.onbeforeunload = null;
        }
        return null;
    }
    const [storageItems, setStorageItems] = useState(localStorage.length);
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    window.addEventListener("resize", () => { setWindowSize(window.innerWidth) })
    return (

        <div className="container" id="productDtlBody">
            {/* <button onClick={useHistory().goBack()}> Go Back</button> */}
            <DisplayInfo
                imgSrc={windowSize >= 992 ? props.product.categoryImage.desktop
                    : windowSize >= 768 ? props.product.categoryImage.tablet :
                        props.product.categoryImage.mobile}
                isNewProduct={props.product.new + ""}
                shouldReverse="false"
                heading={props.product.name.toUpperCase()}
                description={props.product.description}
                currentlyViewing={true}
                price={props.product.price}
                addedNewtem={() => setStorageItems(storageItems + 1)}
            />
            <div id="productDtlBody2">
                <div id="productDtlFeat1">
                    <h3>FEATURES</h3>
                    <div className="text">{props.product.features}</div>
                </div>
                <div id="productDtlFeat2">
                    <h3>IN THE BOX</h3>
                    <div>
                        {props.product.includes.map(item => (
                            <div key={item.item}>
                                <span className="quantity">{item.quantity}X</span>
                                <span className="text">{item.item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div id="prdImgCon">
                <img src={windowSize >= 992 ? props.product.gallery.first.desktop :
                    windowSize >= 768 ? props.product.gallery.first.tablet
                        : props.product.gallery.first.mobile} id="prdBdyImg1" />
                <img src={windowSize >= 992 ? props.product.gallery.second.desktop :
                    windowSize >= 768 ? props.product.gallery.second.tablet
                        : props.product.gallery.second.mobile}
                    id="prdBdyImg2" />
                <img src={windowSize >= 992 ? props.product.gallery.third.desktop :
                    windowSize >= 768 ? props.product.gallery.third.tablet
                        : props.product.gallery.third.mobile}
                    id="prdBdyImg3" />
            </div>
            <div>
                <h3 id="prdImgHeading">YOU MAY ALSO LIKE </h3>
                <div id="prdImgOthers">
                    {props.product.others.map(item => (
                        <OthersCmp
                            imgSrc={windowSize >= 992 ? item.image.desktop :
                                windowSize >= 768 ? item.image.tablet : item.image.mobile}
                            title={item.name.toUpperCase()}
                            seePrd={item.slug}
                            key={item.slug}
                            sendSlug={slug => props.send(slug)}
                        />
                    ))}
                </div>
            </div>
            <div id="prdDtlThumbnail">
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
            <div id="prodDtlAudio">
                <AudioGear />
            </div>
            <Cart lengthOfCart={storageItems} dec={() => setStorageItems(storageItems - 1)} />
        </div>
    )
}