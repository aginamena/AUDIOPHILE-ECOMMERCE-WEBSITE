import React from "react";
import "./OthersCmp.css";
import { Link } from "react-router-dom";

export default function OthersCmp(props) {
    return (
        <div className="otherCmp">
            <img src={props.imgSrc} />
            <h5>{props.title}</h5>
            <Link to="/prdDetail" className="othercmpbtn"><button onClick={() => props.sendSlug(props.seePrd)}>SEE PRODUCT</button></Link>
        </div>
    )
}