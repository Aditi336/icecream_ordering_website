import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import {Home} from "./pages/Home"
import { Register } from "./pages/Register"
import { Login } from "./pages/Login"
import { ForgotPassword } from "./pages/ForgotPassword"
import { Navbar } from "./components/Navbar"
import {Orders} from './pages/Orders'
// impolrt { Simple } from "./pages/Simple"
import Cart from "./pages/Cart"
import Bills from "./pages/Bills"
import Logout from "./pages/Logout"
import { Footer } from "./components/Footer"

 const App=()=>{

  return(
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/forgotpassword" element={<ForgotPassword/>}/>
      <Route path="/order" element={<Orders/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/bill" element={<Bills/>}/>
      <Route path="/logout" element={<Logout/>}/>
   

    </Routes>
    <Footer/>
    </Router>

    </>
  )
}
export default App