
import React, { useState } from 'react'
import style from './Register.module.css'
import{useFormik} from 'formik'
import * as Yup  from 'yup'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'




 export default  function Register() {


  const [isLoading ,setisLoading]=useState(false)
  const [apiError , setapiError]=useState()

  let  navigate = useNavigate()

 async function send(values){
  setisLoading (true) 
  setapiError("")
  // lma y-press register wl data tkon bttb3t y-zher el loading  

let {data}=await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values).catch((err)=>{
  isLoading(false)
  setapiError(err.response.data.message)
  navigate("/Login")
 
})
// hna shbh el initial values el yup bt5od object bs b2olo kol input el validation bt3to eh w hndha fl validate schema b3d el initial values
  // console.log(data)
if (data.message == "success"){
  setisLoading(false)
  navigate("/Login")
}
 }

let validationSchema = Yup.object({

    name: Yup.string().max(15,"Name should be less than 15").min(3,"Not less than 3 letters").required("name is required"),
    phone: Yup.string().matches(/^01[0125][0-9]{8}$/, "Phone is invalid").required("Phone is required"),
    email: Yup.string().email("Email is not valid").required("Email is required"),
    password:Yup.string().matches(/^[A-Z][a-z0-9]{5,8}$/, "Password should start with capital").required("Password is required"),
    rePassword:Yup.string().oneOf([Yup.ref ('password')],"Password is not match").required()
   
  })




  let formik = useFormik({
    initialValues:{
      name: '',
     email: '',
     phone: '',
     password:'',
     rePassword:''
    
    },
    validationSchema:validationSchema,
    
    onSubmit:(values)=>send(values)
    //   onSubmit:(values)=>console.log("hellooo",values)  ===> hna momkn a7ot parameter hy-return el values el users byd5loha 
    
          })
  
  
  
  
  
  return (
    <>
      <h3 className='my-4'>Register Now</h3>
{apiError? <div className='alert alert-danger'> {apiError}</div>:""}

      {/* htro7 tklm onsubmit el fo2 el btstlm function */}

<form onSubmit={formik.handleSubmit}>  
<div className="one">

  <label className={style.label}> Name </label><br />

<input type='text' className={`w-75 ${style.box}`} id='name' name='name' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}  ></input><br />
{formik.errors.name && formik.touched.name?<div className={`w-75 alert alert-danger ${style.danger}`}>{formik.errors.name}</div> : ""}

</div>

<div className="two">

<label className={style.label}> Phone </label><br />
<input type='tel' className={`w-75 ${style.box}`}   id='phone' name='phone' value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur}></input><br />

{formik.errors.phone && formik.touched.phone?<div className={`w-75 alert alert-danger ${style.danger}`}>{formik.errors.phone}</div> : ""}

</div>


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


<div className="five">

<label className={style.label}> rePassword </label><br />
<input type='Password' className={`w-75 ${style.box}`} name='rePassword'  id='rePassword' value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur}></input><br /><br />
{formik.errors.rePassword && formik.touched.rePassword?<div className={`w-75 alert alert-danger ${style.danger}`}>{formik.errors.rePassword}</div> : ""}

</div>
{isLoading? <button type='submit' className='btn bg-success w-25 text-white'>    <i class="fas fa-spinner fa-spin"></i>
</button>
:<button type='submit' disabled={!(formik.isValid && formik.dirty)} className='btn bg-success w-25 text-white'>Register</button>
}


</form>
      
    </>
  )
}
