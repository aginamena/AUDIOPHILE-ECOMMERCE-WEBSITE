import React, { useState } from "react";
import "./AudioGear.css";

export default function AudioGear() {
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    window.addEventListener("resize", () => { setWindowSize(window.innerWidth) })
    return (
        < div id="audioGear">
            <div id="audioGeardiv">
                <h2>Bringing you the <span style={{ color: "#D87D4A" }}>best</span> audio gear</h2>
                <div>
                    Located at the heart of New York City, Audiophile is the premier store for
                    high end headphones, earphones, speakers, and audio accessories. We have a
                    large showroom and luxury demonstration rooms available for you to browse
                    and experience a wide range of our products. Stop by our store to meet some
                    of the fantastic people who make Audiophile the best place to buy your portable
                    audio equipment.
                </div>
            </div>
            <img src={windowSize >= 992 ? "./assets/shared/desktop/image-best-gear.jpg" :
                windowSize >= 768 ? "./assets/shared/tablet/image-best-gear.jpg" :
                    "./assets/shared/mobile/image-best-gear.jpg"} />
        </div >
    )

}