import React, { useContext } from 'react'
import style from './Nav.module.css'
import {Link, useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free'
import sora from '../../Assets/cart.png'
import { UserContext } from '../Context/UserContext'
export default function Nav() {
let {userToken,setUserToken}=useContext(UserContext)
let navigate =useNavigate()

function logout(){
localStorage.removeItem("userToken")
setUserToken(null)
navigate("/Login")
}



  return (
    <>



<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container px-5"><div className="frame">
  <img src={sora} className={style.img}/>
    <a class="navbar-brand" href="#">Fresh Cart</a>
   
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">

    
      <ul className="navbar-nav px-5 ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link class="nav-link active" aria-current="page" to={"/Register"}>Register</Link>
        </li>
        


        <li className="nav-item">
          <Link class="nav-link active" aria-current="page" to={"/Login"}>Login</Link>
        </li>


        <li className="nav-item">
          <button class="nav-link active" aria-current="page" onClick={logout} >LogOut</button>
        </li>
      </ul>
      
      
    </div>
  </div>
</nav>



    </>
  )
}
