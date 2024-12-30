import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../store/Auth";
import { useNavigate } from "react-router-dom";
import "../css/bill.css"
import {toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Bills=()=>{
    const {user,cart,price}=useContext(AuthContext)
    function getData(){
        const today=new Date()
        const month = today.getMonth()+1;
        const year = today.getFullYear();
        const date = today. getDate();
        return `${date}/${month}/${year}`    
    }

    const [currentData,setcurrentData]=useState(getData())

    const [reciptent,setreciptent]=useState({
        username:user.username,
        phone:user.phone,
        address:"",
        date:currentData,
        ordered_item:[],
        price:price
    })

    const handleChange=(e)=>{
        setreciptent({
            ...reciptent,
            address:e.target.value
        })
    }
    

    useEffect(()=>{
        const orderedItems=cart.map(bill=>({
            item:bill.heading_p,
            price:Number(bill.prize),
            amount:Number(bill.amount)

        }))

        setreciptent(prev=>({
            ...prev,
            ordered_item:orderedItems
        }))
    },[cart])

   
    

    const navigate=useNavigate()


    const handleSubmit=async(e)=>{
        e.preventDefault()
        console.log("reciptent",reciptent)
        try {

            
            const response=await fetch(`http://localhost:5000/api/recipt/bill`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(reciptent)
            })

            const responseData=await response.json()
            console.log("Response data:",responseData)
            if(response.ok){
                toast.info("Order placed successfully")

                setreciptent({username:"",phone:"",address:"",date:"",ordered_item:"",price:""})
                navigate("/")
                // alert("okay")
            }else {
                console.error('Server responded with an error:', response.status, responseData);
            }
        } catch (error) {
            console.log(error)
        }


    }
    return(

        <>
            <div id="receipt_heading">Delicious Order</div>
            <section id="recipt_download">
            <table>

            
                <div id="reciptent_username">
                    
                    <th>Customer name:</th>
                    <td>{user.username}</td>
                </div>
                <div id="reciptent_phone">
                    <th>Phone no:</th>
                    <td>{user.phone}</td>
                </div>
                <div>
                    <th><label id="reciptent_address">Address</label></th>
                    <td><input 
                    name="address" 
                    id="address" 
                    autoComplete="off" 
                    required 
                    value={reciptent.address} 
                    onChange={handleChange}></input></td>
                </div>
                <div id="reciptent_date">
                    <th>Date:</th>
                    <td>{currentData}</td>
                </div>
                <div>
                
                <ol >
               { cart.map((bill)=>(
                <li key={bill.id} id="item_block_li" >
                <img   className="bill_images" src={bill.img_src} alt={bill.heading_p} />
                <div id="bill_details">
                <div className="bill_p">{bill.heading_p}</div> 
                <div id="bill_prize">{bill.amount}</div>

                <div id="bill_prize">&#x20B9; {bill.prize}</div>
                </div>

                
                
                </li>

                ))}
            </ol>
                </div>
            <div id="reciptent_price">
                <th>Total:</th>
                <td>{price}</td>
            </div>
            <div>
                <button id="recipt_confirm" onClick={(e)=>handleSubmit(e)}>Click to pay</button>
            </div>
            </table>
            
            </section>
            <ToastContainer/>
        </>
    )
}
export default Bills