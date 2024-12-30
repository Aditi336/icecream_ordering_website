import React from "react";
import {  createContext,useContext,useState } from "react";
import { useEffect } from "react";
import {toast,ToastContainer} from 'react-toastify'


export const AuthContext=createContext()

export const AuthProvider=(props)=>{
    const [cart,setcart]=useState([])
    const [item_count,setitem_count]=useState(0)

    const handleOrder=(item)=>{
        let isPresent=false
        cart.forEach((product)=>{
          if(item.id===product.id)
            isPresent=true
        })
        if(isPresent )
          {toast.error("Already present is cart")
          return}
        else{
          setcart([...cart,item])
          setitem_count(prevCount => prevCount + 1)
          console.log(item_count,"hiiiiiiiiiiii")
        }
  
      }

    const handleRemove=(id)=>{
        const arr=cart.filter((item)=>item.id!==id)
        setcart(arr)
        setitem_count(arr.length)
    }
    const handleChange=(item,d)=>{
        let ind=-1;
        cart.forEach((data,index)=>{
            if(data.id===item.id)
                ind=index
        })
        const tempArr=cart
        tempArr[ind].amount+=d

        if(tempArr[ind].amount===0)
            tempArr[ind].amount=1
        setcart([...tempArr])
        console.log("increase")
    }
    const handleCLear=()=>{
        setcart([])
    }

    const [price,setprice]=useState(0)

    const handlePrice=()=>{
        let ans=0
        cart.forEach((item)=>(
            ans+=item.prize*item.amount
        ))
        setprice(ans)
    }

    useEffect(()=>{
        console.log(cart)
        handlePrice()
    },[cart])

    // user details
    const [user,setuser]=useState("")
    const [token,settoken]=useState(localStorage.getItem("token"))

    const authorizationToken=`Bearer ${token}`

    const storetokenInLS=(serverToken)=>{
        settoken(serverToken)
        return localStorage.setItem("token",serverToken)
    }

    let isLoggedIn=!!token
    console.log("isLoggedIN",isLoggedIn)

    const LogoutUser=()=>{
        settoken("")
        return localStorage.removeItem("token")
    }

    
    const getUser=async()=>{
        try{
            const response=await fetch("http://localhost:5000/api/auth/user",{
                method:"GET",
                headers:{
                    Authorization:`Bearer ${token}`,
                },
            })
            if(response.ok){
                const data=await response.json()
                console.log(data)
                setuser(data.userData)//???
                console.log("mydata",data.userData)
            }
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getUser()
        console.log(user)
    },[])


    const contextValue={
        cart,
        setcart,
        handleOrder,
        handleRemove,
        handleChange,
        handlePrice,
        price,
        isLoggedIn,
        user,
        handleCLear,
        storetokenInLS,
        LogoutUser
    }
    return(
        <AuthContext.Provider value={contextValue}> 
            {props.children}
        </AuthContext.Provider>
    )

}
