import React from "react";
import "./SummaryItems.css";

export default function SummaryItems(props) {
    return (
        <div className="summaryItem">
            <div style={{ display: "flex" }}>
                <img src={props.img} className="summary-img" />
                <div>
                    <div className="summary-name">{props.name}</div>
                    <div className="summary-amount">$ {new Intl.NumberFormat().format(props.amount)}</div>
                </div>
            </div>
            <div className="summary-quantity">X{props.quantity}</div>
        </div>
    )
}