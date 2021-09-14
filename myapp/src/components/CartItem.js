import React from "react";
import "./CartItem.css";

export default function CartItem(props) {
    function remove() {
        localStorage.removeItem(props.fullName);
        props.decrease();
    }
    return (
        <div className="cartItem">
            <div style={{ display: "flex" }}>
                <img src={props.img} className="cartItemImage" />
                <div>
                    <div className="cartItem-name">{props.name}</div>
                    <div className="cartItem-amount">$ {new Intl.NumberFormat().format(props.amount)}</div>
                </div>
            </div>
            <div className="cartItem-quantity">
                {props.quantity}
            </div>
            <div style={{ cursor: "pointer" }} onClick={() => remove()}>
                X
            </div>

        </div>
    )
}