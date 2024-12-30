import { useState } from "react"
import { useNavigate,NavLink } from "react-router-dom"
import "../css/login.css"
 

export const ForgotPassword=()=>{

    const [User,setUser]=useState({
        email:"",
    })

    const handleInput=(e)=>{
       let name=e.target.name;
       let value=e.target.value;

       setUser({
        ...User,
        [name]:value
       })
    }

    const navigate=useNavigate()

    const handleSubmit=async(e)=>{
        e.preventDefault()
        console.log(User)

        try {
            
            const response=await fetch(`http://localhost:5000/api/auth/forgtpassword`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(User)
            })

            console.log(response)

            const res_data=await response.json()
            console.log("login details ",res_data.message)

            if(response.ok){
                alert("password reset is successfull")
                setUser({email:""})
                navigate("/login")
            }else{
                alert("Not registered")
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleReset=()=>{
        setUser({email:""})
    }
    return(
        <>
        <h1 id="header-login">Login here!!</h1>
        <div>
            <form  onSubmit={handleSubmit}>
                <table id="table-login">
                <tr>
                <th><label htmlFor="email">email</label></th>
                <td><input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                required
                value={User.email}
                onChange={handleInput}/></td>
                </tr>
                
                

                <tr>
                    <th><button type="submit" id="submit-login">Submit</button></th>
                    <td><button type="reset" id="reset-login" onClick={handleReset}>Reset</button></td>
                </tr>
                <div id="link-to-register"><NavLink to="/register" id="navlink-register">Don't have account?</NavLink></div>
                </table>
            </form>
        </div>
        </>
    )
}