import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import { IoLogIn } from "react-icons/io5";
import { IoIosIceCream } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";

export const SidebarData=[
    {
        title:'Home',
        path:'/',
        icon:<FaHome />,
        cName:'nav-text'

    },
    {
        title:'Register',
        path:'/register',
        icon:<GiArchiveRegister />,
        cName:'nav-text'
    },
    {
        title:'Login',
        path:'/login',
        icon:<IoLogIn />,
        cName:'nav-text'
    },
    {
        title:'Icecream',
        path:'/order',
        icon:<IoIosIceCream />,
        cName:'nav-text'
    },
    {
        title:'Cart',
        path:'/cart',
        icon:<FaShoppingCart />,
        cName:'nav-text'
    },
    {
        title:'Logout',
        path:'/logout',
        icon:<IoLogOut />,
        cName:'nav-text'
    }

]