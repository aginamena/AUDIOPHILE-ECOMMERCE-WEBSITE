import React from "react";
import "./Thankyou.css";
import SummaryItems from "./SummaryItems";
import { Link } from "react-router-dom";
var runningTotal = 0;
function getTotal(value) {
    runningTotal += value;
    return true;
}
export default function Thankyou() {
    return (
        <div id="thank-you">
            <img src="./assets/shared/desktop/check-mark.svg" />
            <h3>THANK YOU FOR YOUR ORDER</h3>
            <div id="email-confirm-msg">You will receive an email confirmation shortly.</div>
            <div id="thank-you-order">
                <div id="con0">
                    <div>
                        {Object.keys(localStorage).map((cartItem, index) => (
                            getTotal(((JSON.parse(localStorage.getItem(cartItem)).quantity)
                                * (JSON.parse(localStorage.getItem(cartItem)).price))) &&
                            index == 0 && <SummaryItems
                                name={JSON.parse(localStorage.getItem(cartItem)).name}
                                quantity={JSON.parse(localStorage.getItem(cartItem)).quantity}
                                img={JSON.parse(localStorage.getItem(cartItem)).imgSrc}
                                amount={JSON.parse(localStorage.getItem(cartItem)).price}
                                key={Math.floor(Math.random() * 100)}
                            />
                        ))}
                        {
                            localStorage.length > 1 && <div id="remaining-items">and {localStorage.length - 1} other item(s)</div>
                        }
                    </div>
                </div>
                <div id="con1">
                    <div id="grand-total-checkout">GRAND TOTAL </div>
                    <div id="grand-amount">$ {new Intl.NumberFormat().format(runningTotal + 1129)}</div>
                </div>
            </div>
            <Link to="/"><button>BACK TO HOME</button></Link>
        </div>
    )
}