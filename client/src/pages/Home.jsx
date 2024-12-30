import { useContext } from "react"
import "../css/home.css"
import { AuthContext } from "../store/Auth"

export const Home=()=>{
    const {user}=useContext(AuthContext)
    console.log("home user",user)
    return(
        <>
        
        <section>
            <div id="home-text">
            Ice cream is a popular frozen dessert enjoyed worldwide. 
            It is typically made from dairy products, such as milk and cream, combined with sugar or sweeteners, and flavored with various ingredients like fruits, chocolate, vanilla, or nuts. The mixture is then churned and frozen to create a creamy and delicious treat.
            The history of ice cream dates back centuries, with various cultures contributing to its development.<br></br><br></br><br></br> 
        
        Today, it remains a popular and versatile dessert enjoyed by people of all ages. Whether you prefer classic flavors or unique combinations, ice cream is a delightful indulgence for many.

            </div>
            </section >
               
            <section id="booba">
                <img src="https://www.shutterstock.com/shutterstock/photos/2306583603/display_1500/stock-vector-bubble-tea-coffee-drink-doodle-cup-of-ice-milk-milkshake-in-glasses-cute-cartoon-beverages-for-2306583603.jpg"
                        id="booba_tea_img">
                    </img>
                    <div id="booba_tea_text">
                        <p>Try new collection of booba tea!!</p>
                    </div>
            </section>
            <p id="home-mapping-head">Find us here!</p>

            <section id="home-mapping-div">
            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7598.996767315366!2d83.24293794200099!3d17.768259282741095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39678adaf94731%3A0x6789f78c46d2ec2b!2sSri%20Varahalakshmi%20Narasimha%20Swamy%20Vari%20Devasthanam!5e0!3m2!1sen!2sin!4v1718885161593!5m2!1sen!2sin" 
            width="100%" 
            height="450px" 
            style={{border:"0"}}
            allowFullScreen=""
            loading="lazy" 
            id="home-mapping"
            referrerPolicy="no-referrer-when-downgrade"></iframe>            </div>

            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62207.67633229672!2d77.45075766173133!3d12.97314560995805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15fd0e83f017%3A0x1f1179688042665!2sGopalan%20Arcade%20Mall!5e0!3m2!1sen!2sin!4v1719144779488!5m2!1sen!2sin" 
            width="100%" 
            height="450px" 
            style={{border:"0"}}
            allowFullScreen=""
            loading="lazy" 
            id="home-mapping"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125766.13939074083!2d77.97516068053346!3d9.917973701894601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xdc955b7264f63933!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1719145113919!5m2!1sen!2sin" 
            width="100%" 
            height="450px" 
            style={{border:"0"}}
            allowFullScreen=""
            loading="lazy" 
            id="home-mapping"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124079.74569014557!2d79.3440998335296!3d13.62780572198372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b0f88620427%3A0xcf4152d1daca0cac!2sTirupati%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1719145219310!5m2!1sen!2sin" 
            width="100%" 
            height="450px" 
            style={{border:"0"}}
            allowFullScreen=""
            loading="lazy" 
            id="home-mapping"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
        </>
    )
}