import React, { useEffect, useState } from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

export default function Cart(props) {
    var runningTotal = 0;
    function getTotal(total) {
        runningTotal += total;
        return true;
    }
    function resetLinks() {
        document.querySelector("#cart").style = "display:none";
        document.querySelector("#root").style = "background-color: initial";
        document.querySelector(".displayInfo .displayInfoImg").style = "filter:brightness(1)";
        document.querySelector("#prdImgCon").style = "filter:brightness(1)";
        document.querySelector("#prdImgOthers").style = "filter:brightness(1)";
        document.querySelector("#prdDtlThumbnail").style = "filter:brightness(1)";
        document.querySelector("#audioGear").style = "filter:brightness(1)";
        document.querySelector(".navigation").style = "pointer:cursor";
        document.querySelector("#footer").style = "pointer:cursor";
        let links = document.querySelectorAll("#productDtlBody .thumbnail-shop");
        let link2 = document.querySelectorAll("#productDtlBody .othercmpbtn");
        for (let i = 0; i < links.length; i++) {
            links[i].style = "pointer:cursor";
        }
        for (let i = 0; i < link2.length; i++) {
            link2[i].style = "pointer:cursor";
        }
        document.querySelector(".displayInfoBtn2").style = "filter:brightness(1);pointer:cursor";
        document.querySelector(".displayInfoBtn1").style = "filter:brightness(1);pointer:cursor";
    }
    return (
        <div id="cart">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h6>CART({props.lengthOfCart})</h6>
                <div id="keep-shopping" onClick={() => resetLinks()}>Keep Shopping</div>
            </div>
            <div id="items-in-cart">
                {
                    Object.keys(localStorage).map(cartItem => (
                        getTotal(((JSON.parse(localStorage.getItem(cartItem)).quantity)
                            * (JSON.parse(localStorage.getItem(cartItem)).price))) &&
                        <CartItem
                            name={JSON.parse(localStorage.getItem(cartItem)).name}
                            quantity={JSON.parse(localStorage.getItem(cartItem)).quantity}
                            img={JSON.parse(localStorage.getItem(cartItem)).imgSrc}
                            amount={JSON.parse(localStorage.getItem(cartItem)).price}
                            key={Math.floor(Math.random() * 100)}
                            fullName={cartItem}
                            decrease={() => props.dec()}
                        />
                    ))
                }
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
                <div id="totalDis">TOTAL</div>
                <div id="amount">$ {new Intl.NumberFormat().format(runningTotal)}</div>
            </div>
            <Link to="/checkout"><button onClick={() => resetLinks()}>CHECKOUT</button></Link>
        </div>
    )
}