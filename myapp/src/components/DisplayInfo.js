import React, { useState } from "react";
import "./DisplayInfo.css";
import { Link } from "react-router-dom";

export default function DisplayInfo(props) {
    const [quantity, setQuantity] = useState(1);
    function displayCart() {
        document.querySelector("#cart").style = "display:block";
        document.querySelector("#root").style = "background-color: rgba(0, 0, 0, 0.5);";
        document.querySelector(".displayInfo .displayInfoImg").style = "filter:brightness(0.5)";
        document.querySelector("#prdImgCon").style = "filter:brightness(0.5)";
        document.querySelector("#prdImgOthers").style = "filter:brightness(0.5)";
        document.querySelector("#prdDtlThumbnail").style = "filter:brightness(0.5)";
        document.querySelector("#audioGear").style = "filter:brightness(0.5)";
        document.querySelector(".navigation").style = "pointer-events:none";
        document.querySelector("#footer").style = "pointer-events:none";
        let links = document.querySelectorAll("#productDtlBody .thumbnail-shop");
        let link2 = document.querySelectorAll("#productDtlBody .othercmpbtn");
        for (let i = 0; i < links.length; i++) {
            links[i].style = "pointer-events:none";
        }
        for (let i = 0; i < link2.length; i++) {
            link2[i].style = "pointer-events:none";
        }
        document.querySelector(".displayInfoBtn2").style = "filter:brightness(0.5);pointer-events:none";
        document.querySelector(".displayInfoBtn1").style = "filter:brightness(0.5);pointer-events:none";
        const storageObject = {
            name: props.heading.substring(0, 4).trim(),
            quantity: quantity,
            imgSrc: props.imgSrc,
            price: props.price,
            total: props.price * quantity
        }
        if (localStorage.getItem(props.heading) === null) {
            localStorage.setItem(props.heading, JSON.stringify(storageObject));
            props.addedNewtem();
        }
        else {
            alert(`${props.heading} is alreading in the cart`);
        }
    }
    return (
        <div className="displayInfo" style={props.shouldReverse == "true" ? { flexFlow: "row-reverse" } : {}}>
            <img src={props.imgSrc} className="displayInfoImg" />
            <div className="displayInfoText">
                {props.isNewProduct == "true" && <div className="disInfoNew">NEW PRODUCT</div>}
                <h2>{props.heading}</h2>
                <div className="displayInfoDes">{props.description}</div>
                {props.currentlyViewing ?
                    <div>
                        <h6 id="displayInfoPrice">$ {new Intl.NumberFormat().format(props.price)}</h6>
                        <span className="displayInfoBtn2">
                            <span className="plus-sub" onClick={() => setQuantity(quantity + 1)}>+</span>
                            <span>{quantity}</span>
                            <span className="plus-sub" onClick={() => quantity > 1 && setQuantity(quantity - 1)}>-</span>
                        </span>
                        <button className="displayInfoBtn1" onClick={() => displayCart()}>ADD TO CART</button>
                    </div>
                    : <Link to="/prdDetail"><button className="displayInfoBtn1" onClick={() => { props.sendSlug(props.slug) }}
                    >SEE PRODUCT</button></Link>}

            </div>

        </div>
    )
}