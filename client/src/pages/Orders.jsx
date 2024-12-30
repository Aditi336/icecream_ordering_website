import React, { useContext, useState } from "react";
import content from './Contents_api';
import "../css/order.css"
import { FaShoppingCart } from "react-icons/fa";
import {toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../store/Auth";


export const Orders = () => {

    const {cart,handleOrder,item_count,isLoggedIn}=useContext(AuthContext)
    // const[cart,setcart]=useState([])
    // const [item_count,setitem_count]=useState(0)
    const navigate=useNavigate()

    // const handleOrder=(item)=>{
    //   let isPresent=false
    //   cart.forEach((product)=>{
    //     if(item.id===product.id)
    //       isPresent=true
    //   })
    //   if(isPresent)
    //     {toast.error("Already present is cart")
    //     return}
    //   else{
    //     setcart([...cart,item])
    //     setitem_count(item_count+1)
    //   }

    // }

    const handleSubmit=()=>{
        // console.log(cart)
        if(isLoggedIn){
          toast.success("Added to cart")
          navigate("/cart")
     
        }
        else{
          navigate("/login")
        }
    }

  return (

<>
    <section>
        <div  id="order_nav">
            <button  onClick={handleSubmit}id="submit_order"> <FaShoppingCart id="submit_order" /></button>
            <div id="counter_order">{item_count}</div>
            <ToastContainer/>
        </div>
    </section>
    <section>
      {content.map((section) => (
        <div className="button_order_option" key={section.heading}>
          <h2>{section.heading}</h2>
          <ol className="list_options">
            {section.types.map((order) => (
              <li key={order.id}>
                <img onClick={()=>{handleOrder(order)}} id={order.id_img} src={order.img_src} alt={order.heading_p} />
                <p id={order.id_p}>{order.heading_p} &#x20B9; {order.prize}</p>
              </li>
            ))}
          </ol>
        </div>
      ))}
      </section>
</>

  );
};

