import React from "react";
import "./Thumbnail.css";
import { Link } from "react-router-dom";

export default function Thumbnail(props) {
    // const [windowSize, setWindowSize] = useState(window.innerWidth);
    // window.addEventListener("resize", () => { setWindowSize(window.innerWidth) })
    return (
        <div className="homepageThumbnail">
            <img src={props.imgSrc} className="image" />
            <div className="homepageBodyThumbnailName">{props.heading}</div>
            <div className="homepageBodyShop">
                <Link to={props.value} className="thumbnail-shop"><span>shop</span></Link>
                <img src="./assets/shared/desktop/icon-arrow-right.svg" />
            </div>
        </div>
    )
}