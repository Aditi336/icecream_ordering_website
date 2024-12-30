import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaSquareFacebook } from "react-icons/fa6";
import './footer.css'
import { useNavigate } from "react-router-dom";
export const Footer=()=>{

    const navigate=useNavigate()
    const handleMenu=()=>{
        navigate("/order")
    }
    return(
        <>
            <section id="footer-bottom-section">
                <div>
                <ul id="footer-content-div">
                    <li className="footer-content-div_li">About</li>
                    <li className="footer-content-div_li" onClick={()=>handleMenu()}>Menu</li>
                    <li className="footer-content-div_li">Company info</li>
                    <li className="footer-content-div_li">Store Locator</li>
                    <li className="footer-content-div_li">Gift Cards</li>
                </ul>
                    


                </div>
                <div>
                    <ul id="footer-content-div">
                        <li ><FaInstagramSquare className="footer-app-div_li" /></li>
                        <li ><FaTwitterSquare className="footer-app-div_li" /></li>
                        <li ><FaSquareFacebook className="footer-app-div_li" /></li>
                        <li ><IoLogoYoutube className="footer-app-div_li" /></li>
                    </ul>
                </div>
            </section>
        </>
    )
}