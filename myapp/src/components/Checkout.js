import React, { useState } from "react";
import "./Checkout.css";
import SummaryItems from "./SummaryItems";

export default function Checkout(props) {
    document.querySelector("#root").style = "background-color:#F2F2F2";
    const [paymentMethod, setPaymentMethod] = useState("");

    var runningTotal = 0;
    function getTotal(total) {
        runningTotal += total;
        return true;
    }
    function displaypayment() {
        document.querySelector("#thank-you").style = "display:block";
        document.querySelector("#root").style = "background-color: rgba(0, 0, 0, 0.5)";
        document.querySelector("#checkout1").style = "filter:brightness(0.5); pointer-events:none";
        document.querySelector("#checkout2").style = "filter:brightness(0.5); pointer-events:none";
    }

    return (
        <div id="checkoutDiv" className="container">
            <form id="checkout1">
                <h3>CHECKOUT</h3>
                <div>
                    <div className="block-type" >BILLING DETAILS </div>
                    <div className="user-info">
                        <div className="grid-styling">
                            <div>
                                <label>Name</label>
                                <input type="text" className="full-size-input" placeholder="Mena Agina" required />
                            </div>
                            <div>
                                <label>Email Address</label>
                                <input type="text" className="full-size-input" placeholder="MA@gmail.com" required />
                            </div>
                        </div>
                        <div>
                            <label>Phone Number</label>
                            <input type="text" placeholder="+1 234-872-0823" className="half-size-input" required />
                        </div>
                    </div>
                </div>

                <div>
                    <div className="block-type" >SHIPPING INFO </div>
                    <div className="user-info">
                        <div>
                            <label>Address</label>
                            <input type="text" className="full-size-input" placeholder="1287 Jacksons Avenue" required />
                        </div>
                        <div className="grid-styling">
                            <div>
                                <label>Zip Code</label>
                                <input type="text" className="full-size-input" placeholder="K1X0L1" required />
                            </div>
                            <div>
                                <label>City</label>
                                <input type="text" className="full-size-input" placeholder="New York" required />
                            </div>
                        </div>
                        <div>
                            <label>Country</label>
                            <input type="text" placeholder="United States" className="half-size-input" required />
                        </div>
                    </div>
                </div>

                <div>
                    <div className="block-type">PAYMENT DETAILS</div>
                    <div id="payment1">
                        <label>Payment Methods</label>
                        <div>
                            <div className="half-size-input">
                                <input type="radio" name="payment-method"
                                    onClick={() => setPaymentMethod("interact")}
                                /> e-Money
                            </div>
                            <div className="half-size-input">
                                <input type="radio" name="payment-method"
                                    onClick={() => setPaymentMethod("cash")}
                                /> Cash on Delivery
                            </div>
                        </div>
                    </div>

                    {paymentMethod.length > 0 && (paymentMethod == "interact" ?
                        <div className="grid-styling">
                            <div>
                                <label>e-Money Number</label>
                                <input type="text" className="full-size-input" placeholder="492075108" required />
                            </div>
                            <div>
                                <label>e-Money PIN</label>
                                <input type="text" className="full-size-input" placeholder="9183" required />
                            </div>
                        </div>
                        :
                        <div id="cash-payment">
                            <i class="fas fa-truck fa-3x" id="truck-delivery"></i>
                            <div>
                                The ‘Cash on Delivery’ option enables you to pay in cash when our delivery
                                courier arrives at your residence. Just make sure your address is correct so
                                that your order will not be cancelled.
                            </div>
                        </div>)}


                </div>

            </form>
            <div id="checkout2">
                <h6>SUMMARY</h6>
                <div id="checkout2-items">
                    {
                        Object.keys(localStorage).map(cartItem => (
                            getTotal(((JSON.parse(localStorage.getItem(cartItem)).quantity)
                                * (JSON.parse(localStorage.getItem(cartItem)).price))) &&
                            <SummaryItems
                                name={JSON.parse(localStorage.getItem(cartItem)).name}
                                quantity={JSON.parse(localStorage.getItem(cartItem)).quantity}
                                img={JSON.parse(localStorage.getItem(cartItem)).imgSrc}
                                amount={JSON.parse(localStorage.getItem(cartItem)).price}
                                key={Math.floor(Math.random() * 100)}
                            />
                        ))
                    }
                </div>
                <div>
                    <div className="checkout-summary">
                        <div className="heading">TOTAL</div>
                        <div className="desc">$ {new Intl.NumberFormat().format(runningTotal)}</div>
                    </div>
                    <div className="checkout-summary">
                        <div className="heading">SHIPPING</div>
                        <div className="desc">$ 50</div>
                    </div>
                    <div className="checkout-summary">
                        <div className="heading">VAT (INCLUDED)</div>
                        <div className="desc">$ 1,079</div>
                    </div>
                    <div id="grand-total">
                        <div id="heading">GRAND TOTAL</div>
                        <div id="desc">$ {new Intl.NumberFormat().format(runningTotal + 1129)}</div>
                    </div>
                    <button onClick={() => displaypayment()}>CONTINUE & PAY</button>
                </div>
            </div>

        </div>
    )
}