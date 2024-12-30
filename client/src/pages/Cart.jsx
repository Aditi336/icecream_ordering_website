import React, { useContext, useEffect, useState } from "react";
import "../css/cart.css"
import { AuthContext } from "../store/Auth";
import { useNavigate } from "react-router-dom";
const Cart=()=>{
    
    const {cart,handleRemove,handleChange,handlePrice,price,isLoggedIn,handleCLear,user}=useContext(AuthContext)
    const navigate=useNavigate()

    const handleBill=()=>{
        if(isLoggedIn===false && user.username==" " && user.email=="")
        {
            navigate("/login")
        }
        navigate("/bill")
    }
    
    return(
        <>
            <div id="item_block_heading">Shopping Cart</div>
            {/* <button onClick={()=>{console.log(cart)}}>hi</button> */}
            <section id="cart_to_bill">
            <section id="items_block">
            <ol >
               { cart.map((bill)=>(
                <li key={bill.id} id="item_block_li">
                <img   className="bill_images" src={bill.img_src} alt={bill.heading_p} />
                <div id="bill_details">
                <div className="bill_p">{bill.heading_p}</div> 
                <div id="bill_prize">&#x20B9; {bill.prize}</div>
                </div>

                
                <div id="item_buttons">
                {/* using auth.jsx instead of using {handleIncrease} use {()=>{handleIncrease} which is correct way and avoids the re-rendering error} */}
                <button id="item_increase_cart" onClick={()=>handleChange(bill,+1)}>+</button>
                <div id="bill_prize">{bill.amount}</div>

                <button id="item_decrease_cart" onClick={()=>handleChange(bill,-1)}>-</button>
                <button id="item_remove_cart" onClick={()=>handleRemove(bill.id)}>Remove</button>
                </div>
                </li>

                ))}
            </ol>
            
            </section>
            <div id="total_prize">
                Total:{price}
            </div>
            <div id="total_prize_button">
                <button id="bill_generation" onClick={()=>handleBill()}>Order now</button>
                <button id="bill_generation" onClick={()=>handleCLear()}>Clear Cart</button>
            </div>
            </section>

          
        </>
    )
}

export default Cart

