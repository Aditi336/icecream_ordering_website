import React, { useState } from "react";
import content from './Contents_api';
import "../css/order.css"

export const Simple = () => {

    const [cart,setcart]=useState([])

    const handleOrder=(item)=>{
      let isPresent=false
      cart.forEach((product)=>{
        if(item.id===product.id)
          isPresent=true
      })
      if(isPresent)
        return
      else{
        setcart([...cart,item])
      }

    }

    const handleSubmit=()=>{
     console.log(cart) 
     alert(cart)
    }

  return (

    <>
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
      <section>
        <button onClick={handleSubmit}> Submit</button>
      </section>
    </>
  );
};

export default Simple;
