import React, { useContext } from 'react'
import style from './Login.module.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import * as Yup  from 'yup'
import{useFormik} from 'formik'
import { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Home from '../Home/Home'
import { UserContext} from '../Context/UserContext'


export default function Login() {
  const [isLoading ,setisLoading]=useState(false)
  const [apiError , setapiError]=useState()

  let  navigate = useNavigate()
  let {setUserToken}=useContext(UserContext)


  
 async function send(values){
  setisLoading (true) 
  setapiError("")
  // lma y-press register wl data tkon bttb3t y-zher el loading

let {data}=await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', values).catch((err)=>{
  isLoading(false)
  setapiError(err.response.data.message)
 
})
// hna shbh el initial values el yup bt5od object bs b2olo kol input el validation bt3to eh w hndha fl validate schema b3d el initial values
  // console.log(data)
if (data.message == "success"){
  setisLoading(false)
  setUserToken(data.token);
  localStorage.setItem('userToken', data.token)
  navigate("/")
}
 }

let validationSchema = Yup.object({

    email: Yup.string().email("Email is not valid").required("Email is required"),
    password:Yup.string().matches(/^[A-Z][a-z0-9]{5,8}$/, "Password should start with capital").required("Password is required"),
   
  })




  let formik = useFormik({
    initialValues:{
    
     email: '',
     password:''
 
    
    },
    validationSchema:validationSchema,
    
    onSubmit:(values)=>send(values)
    //   onSubmit:(values)=>console.log("hellooo",values)  ===> hna momkn a7ot parameter hy-return el values el users byd5loha 
    
          })
  
  
  
  
  
  return (
    <>
      <h3 className='my-4'>Login Now</h3>

      {/* htro7 tklm onsubmit el fo2 el btstlm function */}

<form onSubmit={formik.handleSubmit}>  



<div className="three">
<label className={style.label}> Email </label><br />
<input type='email' className={`w-75 ${style.box}`}  name='email' id='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}></input><br />
{formik.errors.email && formik.touched.email?<div className={`w-75 alert alert-danger ${style.danger}`}>{formik.errors.email}</div> : ""}


</div>

<div className="four">
<label className={style.label}> Password </label><br />
<input type='password' className={`w-75 ${style.box}`}name='password'  id='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}></input><br />

{formik.errors.password && formik.touched.password?<div className={`w-75 alert alert-danger ${style.danger}`}>{formik.errors.password}</div> : ""}

{/* lw fih error y3ny el input touched w kman onblur (y3ny dkhl w khrg) display el error div */}

</div>



{isLoading? <button type='submit' className='btn bg-success w-25 text-white my-5'>    <i class="fas fa-spinner fa-spin"></i>
</button>
:<button type='submit' disabled={!(formik.isValid && formik.dirty)}  className='btn bg-success w-25 text-white my-5'>Login</button>
}


</form>
      
    </>
  )
}
